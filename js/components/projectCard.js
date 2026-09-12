/**
 * Project Card Component
 * Modular and reusable card renderer for individual projects.
 * Designed to make adding/updating projects as easy as passing an object.
 */

export function createProjectCard(project) {
  const techPills = project.technologies
    .slice(0, 4)
    .map(
      (tech) => `
      <span class="inline-block text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50">
        ${tech}
      </span>
    `
    )
    .join("");

  const extraTechCount = project.technologies.length > 4 ? `
    <span class="inline-block text-[11px] font-medium px-2 py-1 rounded-md bg-slate-800/40 text-slate-400 border border-slate-700/30">
      +${project.technologies.length - 4}
    </span>
  ` : "";

  return `
    <article 
      data-project-card 
      data-category="${project.category}" 
      class="group glass-card rounded-2xl border border-slate-800/80 bg-slate-900/50 hover:bg-slate-900/80 overflow-hidden flex flex-col transition-all duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-950/40 hover:-translate-y-1.5"
    >
      <!-- Thumbnail Wrapper -->
      <div class="relative aspect-video w-full overflow-hidden bg-slate-950">
        <img 
          src="${project.image}" 
          alt="${project.title} Preview" 
          loading="lazy"
          class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        
        <!-- Category & Featured Badges -->
        <div class="absolute top-3 left-3 flex items-center gap-2">
          <span class="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-indigo-300 border border-indigo-500/30">
            ${project.category}
          </span>
          ${
            project.featured
              ? `<span class="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-500/40 flex items-center gap-1">
                  <span>★</span> Featured
                </span>`
              : ""
          }
        </div>

        <!-- Overlay Click to Expand Details -->
        <button 
          type="button" 
          data-open-modal="${project.id}" 
          class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
          aria-label="View deep-dive details for ${project.title}"
        >
          <span class="px-4 py-2 rounded-xl bg-slate-900/90 text-xs font-semibold text-white border border-slate-700 shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <span>Quick View</span>
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </span>
        </button>
      </div>

      <!-- Card Body Content -->
      <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <!-- Key Metric Pill if available -->
          ${
            project.metrics
              ? `
            <div class="mb-3 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
              <span>${project.metrics}</span>
            </div>
            `
              : ""
          }

          <!-- Project Title -->
          <h3 class="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
            ${project.title}
          </h3>

          <!-- Description -->
          <p class="text-sm text-slate-400 line-clamp-2 leading-relaxed mb-5">
            ${project.description}
          </p>
        </div>

        <!-- Tech Stack & Action Links Footer -->
        <div>
          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${techPills}
            ${extraTechCount}
          </div>

          <!-- Action Buttons -->
          <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
            <button 
              type="button" 
              data-open-modal="${project.id}" 
              class="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1 focus:outline-none"
            >
              <span>Case Study</span>
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            <div class="flex items-center gap-2">
              ${
                project.githubUrl
                  ? `
                <a 
                  href="${project.githubUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 transition-colors"
                  aria-label="GitHub Repository for ${project.title}"
                  title="View Source Code"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
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
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-all"
                  aria-label="Live Demo for ${project.title}"
                  title="View Live Application"
                >
                  <span>Live</span>
                  <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    </article>
  `;
}
