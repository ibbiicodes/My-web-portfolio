/**
 * Main Application Orchestrator
 * Bootstraps all components and sets up global handlers.
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Ensure theme is properly synced
  if (window.initTheme) window.initTheme();

  // 2. Initialize Navigation
  if (window.initNavbar) window.initNavbar();

  // 3. Initialize Project Filters
  if (window.initProjectFilter) window.initProjectFilter();

  // 4. Initialize Modal System
  if (window.initProjectModal) window.initProjectModal();

  // 5. Initialize Contact Form & Email Copy
  if (window.initContactForm) window.initContactForm();

  // 6. Global Theme Toggle Click Delegation
  document.addEventListener("click", (e) => {
    const themeBtn = e.target.closest("[data-theme-toggle]");
    if (themeBtn && window.toggleTheme) {
      window.toggleTheme();
    }
  });

  // 7. Back To Top Handler
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 8. Active Scroll Spy
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("[data-nav-link]");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("text-indigo-400", "bg-slate-800/60");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-indigo-400", "bg-slate-800/60");
      }
    });
  });
});
