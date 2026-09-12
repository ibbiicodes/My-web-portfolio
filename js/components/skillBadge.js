/**
 * Skills & Technologies Component
 * Renders categorized skill matrices with clean visual indicators.
 */
import { skillCategories } from "../data/skills.js";

export function renderSkills(containerId = "skills-container") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const categoriesHtml = skillCategories
    .map(
      (cat) => `
      <div class="glass-card rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 sm:p-7 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/20">
        
        <!-- Category Header -->
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            ${getCategoryIcon(cat.icon)}
          </div>
          <div>
            <h3 class="text-lg font-bold text-white tracking-tight">${cat.title}</h3>
          </div>
        </div>

        <p class="text-xs text-slate-400 mb-6 leading-relaxed">
          ${cat.description}
        </p>

        <!-- Skill Pills / Progress Matrix -->
        <div class="space-y-3.5">
          ${cat.skills
            .map(
              (skill) => `
            <div>
              <div class="flex items-center justify-between text-xs mb-1.5 font-medium">
                <span class="text-slate-200 flex items-center gap-2">
                  <span class="text-sm">${skill.icon}</span>
                  <span>${skill.name}</span>
                </span>
                <span class="text-indigo-400 font-mono text-[11px]">${skill.level}%</span>
              </div>
              <!-- Proficiency Bar -->
              <div class="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden">
                <div 
                  class="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-1000 ease-out" 
                  style="width: ${skill.level}%"
                ></div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>

      </div>
    `
    )
    .join("");

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      ${categoriesHtml}
    </div>
  `;
}

function getCategoryIcon(iconName) {
  switch (iconName) {
    case "code":
      return `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`;
    case "server":
      return `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>`;
    case "database":
      return `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`;
    case "layers":
    default:
      return `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`;
  }
}
