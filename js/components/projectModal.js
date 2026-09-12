/**
 * Project Detail Modal Component
 */
function initProjectModal() {
  const container = document.getElementById("project-modal-container");
  if (!container) return;

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-open-modal]");
    if (trigger) {
      const projectId = trigger.getAttribute("data-open-modal");
      const projectList = window.portfolioProjects || [];
      const project = projectList.find((p) => p.id === projectId);
      if (project) {
        openModal(project, container);
      }
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !container.classList.contains("hidden")) {
      closeModal(container);
    }
  });
}

function openModal(project, container) {
  const highlightsHtml = project.highlights
    ? project.highlights
        .map(
          (h) => `
        <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
          <svg class="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <span>${h}</span>
        </li>
      `
        )
        .join("")
    : "";

  const techHtml = (project.technologies || [])
    .map(
      (tech) => `
      <span class="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800 text-indigo-300 border border-slate-700/60">
        ${tech}
      </span>
    `
    )
    .join("");

  container.innerHTML = `
    <div class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn" id="modal-backdrop">
      <div 
        class="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl flex flex-col my-auto animate-scaleUp"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <!-- Modal Header Image -->
        <div class="relative aspect-video w-full bg-slate-950 flex-shrink-0">
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover object-top" />
          <button 
            type="button" 
            id="modal-close-btn"
            class="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700/80 backdrop-blur-md transition-colors"
            aria-label="Close modal"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Content Area -->
        <div class="p-4 sm:p-8 space-y-4 sm:space-y-6">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                ${project.category}
              </span>
              ${
                project.metrics
                  ? `<span class="text-xs text-emerald-400 font-medium truncate">${project.metrics}</span>`
                  : ""
              }
            </div>
            <h2 id="modal-title" class="text-xl sm:text-3xl font-bold text-white leading-tight">
              ${project.title}
            </h2>
          </div>

          <div>
            <h4 class="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Overview</h4>
            <p class="text-slate-300 text-xs sm:text-base leading-relaxed">
              ${project.longDescription || project.description}
            </p>
          </div>

          ${
            highlightsHtml
              ? `
            <div>
              <h4 class="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2.5">Key Technical Highlights</h4>
              <ul class="space-y-2">
                ${highlightsHtml}
              </ul>
            </div>
          `
              : ""
          }

          <div>
            <h4 class="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2.5">Technologies Used</h4>
            <div class="flex flex-wrap gap-1.5 sm:gap-2">
              ${techHtml}
            </div>
          </div>

          <!-- Action Footer -->
          <div class="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-2 sm:gap-3">
            ${
              project.githubUrl
                ? `
              <a 
                href="${project.githubUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>View Code</span>
              </a>
            `
                : ""
            }
            ${
              project.demoUrl
                ? `
              <a 
                href="${project.demoUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-600/30 transition-all"
              >
                <span>Open Live Project</span>
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            `
                : ""
            }
          </div>
        </div>
      </div>
    </div>
  `;

  container.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  const closeBtn = document.getElementById("modal-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => closeModal(container));
  }

  const backdrop = document.getElementById("modal-backdrop");
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeModal(container);
      }
    });
  }
}

function closeModal(container) {
  container.classList.add("hidden");
  container.innerHTML = "";
  document.body.style.overflow = "";
}

if (typeof window !== "undefined") {
  window.initProjectModal = initProjectModal;
}
