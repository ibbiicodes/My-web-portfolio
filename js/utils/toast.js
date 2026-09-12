/**
 * Lightweight Toast Notification Utility
 */

function showToast(message, type = "success", duration = 3500) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  const isSuccess = type === "success";
  
  toast.className = `pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl backdrop-blur-xl border transition-all duration-300 transform translate-y-4 opacity-0 text-sm font-medium ${
    isSuccess
      ? "bg-slate-900/95 text-emerald-400 border-emerald-500/30 shadow-emerald-950/40"
      : "bg-slate-900/95 text-rose-400 border-rose-500/30 shadow-rose-950/40"
  }`;

  const icon = isSuccess
    ? `<svg class="w-5 h-5 flex-shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`
    : `<svg class="w-5 h-5 flex-shrink-0 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`;

  toast.innerHTML = `
    ${icon}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-4", "opacity-0");
  });

  setTimeout(() => {
    toast.classList.add("translate-y-4", "opacity-0");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}

if (typeof window !== "undefined") {
  window.showToast = showToast;
}
