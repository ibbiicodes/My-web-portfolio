/**
 * Hero Section Component
 * Renders the introductory viewport with status pill, gradient heading, stats badges, and primary CTAs.
 */
import { siteConfig } from "../data/siteConfig.js";

export function renderHero(containerId = "hero-container") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const { personal, socials } = siteConfig;

  // Socials row
  const socialIconsSvg = {
    github: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    linkedin: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72z"/></svg>`,
    twitter: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    mail: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
  };

  const socialsHtml = socials
    .map(
      (s) => `
      <a 
        href="${s.url}" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="${s.name}"
        class="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-700 text-slate-400 hover:text-indigo-400 transition-all duration-200 hover:-translate-y-1 shadow-sm"
      >
        ${socialIconsSvg[s.icon] || ""}
      </a>
    `
    )
    .join("");

  // Stats badges
  const statsHtml = personal.stats
    .map(
      (st) => `
      <div class="glass-card p-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 text-center transition-all duration-300 hover:border-indigo-500/40 hover:-translate-y-1">
        <div class="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-300">
          ${st.value}
        </div>
        <div class="text-xs text-slate-400 mt-1 font-medium tracking-wide">
          ${st.label}
        </div>
      </div>
    `
    )
    .join("");

  container.innerHTML = `
    <section id="hero" class="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
      <!-- Background Ambient Glow & Lighting Spheres -->
      <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/20 to-cyan-400/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div class="absolute top-1/3 -right-20 w-[300px] h-[300px] bg-purple-600/15 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          <!-- Availability Status Pill -->
          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-emerald-400 text-xs font-medium backdrop-blur-md mb-8 shadow-sm">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>${personal.statusBadge}</span>
          </div>

          <!-- Main Hero Title -->
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Crafting Scalable
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300">
              Web & Cloud Solutions
            </span>
          </h1>

          <!-- Tagline & Description -->
          <p class="text-base sm:text-lg text-slate-300 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed font-normal">
            Hi, I'm <strong class="text-white font-semibold">${personal.name}</strong> — a ${personal.role} based in ${personal.location}. ${personal.tagline}
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a 
              href="#projects" 
              class="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 hover:from-indigo-500 hover:via-violet-500 hover:to-cyan-500 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Explore Projects</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </a>

            <a 
              href="#contact" 
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Contact Me</span>
              <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </a>
          </div>

          <!-- Social Links Strip -->
          <div class="flex items-center gap-3">
            <span class="text-xs text-slate-500 uppercase tracking-widest font-mono mr-1">Connect:</span>
            ${socialsHtml}
          </div>

        </div>

        <!-- Metric & Credibility Counter Grid -->
        <div class="mt-16 pt-12 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          ${statsHtml}
        </div>

      </div>
    </section>
  `;
}
