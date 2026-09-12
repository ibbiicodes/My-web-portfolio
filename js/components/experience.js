/**
 * Experience & Education Timeline Component
 */
import { experiences, education } from "../data/experiences.js";

export function renderExperience(containerId = "experience-container") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const experienceListHtml = experiences
    .map(
      (item, idx) => `
      <div class="relative pl-8 sm:pl-10 group">
        <!-- Vertical Timeline Line -->
        ${
          idx !== experiences.length - 1
            ? `<div class="absolute left-3 sm:left-3.5 top-6 bottom-0 w-[2px] bg-slate-800 group-hover:bg-indigo-500/50 transition-colors"></div>`
            : ""
        }

        <!-- Timeline Node Circle -->
        <div class="absolute left-1.5 sm:left-2 top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all"></div>

        <!-- Experience Card -->
        <div class="glass-card rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 sm:p-6 mb-8 hover:border-slate-700 transition-all hover:-translate-y-1">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-2">
            <h3 class="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
              ${item.role}
            </h3>
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 w-fit">
              ${item.period}
            </span>
          </div>

          <div class="text-xs font-semibold text-slate-400 mb-3 flex items-center gap-2">
            <span class="text-indigo-400">${item.company}</span>
            <span>•</span>
            <span>${item.location}</span>
          </div>

          <p class="text-sm text-slate-300 leading-relaxed mb-4">
            ${item.description}
          </p>

          <div class="flex flex-wrap gap-1.5">
            ${item.technologies
              .map(
                (tech) => `
              <span class="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50">
                ${tech}
              </span>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    `
    )
    .join("");

  const educationListHtml = education
    .map(
      (edu) => `
      <div class="glass-card rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 sm:p-6 hover:border-slate-700 transition-all">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1">
          <h4 class="text-base font-bold text-white">${edu.degree}</h4>
          <span class="text-xs text-slate-400 font-mono">${edu.period}</span>
        </div>
        <div class="text-xs text-indigo-400 font-medium mb-2">${edu.institution}</div>
        <p class="text-xs text-slate-400 leading-relaxed">${edu.details}</p>
      </div>
    `
    )
    .join("");

  container.innerHTML = `
    <div class="space-y-12">
      <!-- Work History -->
      <div>
        <h3 class="text-xl font-bold text-white mb-8 flex items-center gap-2.5">
          <span class="w-2 h-6 rounded-full bg-indigo-500"></span>
          <span>Professional Experience</span>
        </h3>
        <div class="relative">
          ${experienceListHtml}
        </div>
      </div>

      <!-- Education Section -->
      <div>
        <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
          <span class="w-2 h-6 rounded-full bg-cyan-400"></span>
          <span>Education & Credentials</span>
        </h3>
        <div class="grid grid-cols-1 gap-4">
          ${educationListHtml}
        </div>
      </div>
    </div>
  `;
}
