# Native Windows PowerShell Static Server
# Robust error handling and ES module MIME support

$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Prefixes.Add("http://127.0.0.1:$port/")

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".mjs"  = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
}

try {
    $listener.Start()
    Write-Output "SERVER_RUNNING: http://localhost:$port/"

    while ($listener.IsListening) {
        $context = $null
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $urlPath = $request.Url.LocalPath
            if ($urlPath -eq "/" -or [string]::IsNullOrWhiteSpace($urlPath)) {
                $urlPath = "/index.html"
            }

            # Normalize path
            $cleanPath = $urlPath.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
            $localPath = Join-Path $PSScriptRoot $cleanPath

            if (Test-Path $localPath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
                $mime = $mimeTypes[$ext]
                if (-not $mime) { $mime = "application/octet-stream" }
                
                $response.ContentType = $mime
                $response.AddHeader("Access-Control-Allow-Origin", "*")
                $response.AddHeader("Cache-Control", "no-cache")
                
                $bytes = [System.IO.File]::ReadAllBytes($localPath)
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
                $response.OutputStream.Flush()
            } else {
                $response.StatusCode = 404
                $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $response.ContentLength64 = $msg.Length
                $response.OutputStream.Write($msg, 0, $msg.Length)
                $response.OutputStream.Flush()
            }
            $response.Close()
        } catch {
            Write-Host "Request error: $_"
            if ($context -and $context.Response) {
                try { $context.Response.Close() } catch {}
            }
        }
    }
} catch {
    Write-Error "Listener error: $_"
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
}
