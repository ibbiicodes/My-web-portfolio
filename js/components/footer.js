/**
 * Reusable Footer Component
 */
import { siteConfig } from "../data/siteConfig.js";

export function renderFooter(containerId = "footer-container") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const currentYear = new Date().getFullYear();

  container.innerHTML = `
    <footer class="border-t border-slate-800/80 bg-slate-950 pt-16 pb-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/60">
          
          <!-- Brand & Tagline -->
          <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" class="flex items-center gap-3 group mb-2">
              <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1.5px]">
                <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 text-sm">MI</span>
                </div>
              </div>
              <span class="font-bold text-white text-lg tracking-tight">
                ${siteConfig.personal.name}
              </span>
            </a>
            <p class="text-xs text-slate-400 max-w-sm">
              ${siteConfig.personal.tagline}
            </p>
          </div>

          <!-- Quick Navigation Links -->
          <div class="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-400">
            ${siteConfig.navLinks
              .map(
                (l) => `
              <a href="${l.href}" class="hover:text-indigo-400 transition-colors">
                ${l.label}
              </a>
            `
              )
              .join("")}
          </div>

          <!-- Back to Top Button -->
          <button 
            type="button" 
            id="back-to-top-btn"
            class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:-translate-y-1 transition-all shadow-sm"
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
          </button>
        </div>

        <!-- Copyright & Micro Credits -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© ${currentYear} ${siteConfig.personal.name}. All rights reserved.</p>
          <p class="flex items-center gap-1.5">
            <span>Built with HTML, Tailwind CSS & Vanilla JS</span>
            <span>•</span>
            <span class="text-emerald-400">Production Ready</span>
          </p>
        </div>

      </div>
    </footer>
  `;

  // Back to top click handler
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
