/**
 * Theme Manager Utility
 * Base Theme: DARK
 * Manages theme switching, localStorage persistence, and system preference detection.
 */

const THEME_STORAGE_KEY = "portfolio_theme_preference";

function initTheme() {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "light") {
      setTheme("light", false);
    } else {
      setTheme("dark", false);
    }
  } catch (e) {
    // If localStorage is blocked in some file:// environments
    setTheme("dark", false);
  }
}

function getCurrentTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function setTheme(theme, persist = true) {
  const isDark = theme === "dark";
  
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  if (persist) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (e) {}
  }

  updateThemeToggleButtons(theme);
  window.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
}

function toggleTheme() {
  const nextTheme = getCurrentTheme() === "dark" ? "light" : "dark";
  setTheme(nextTheme, true);
  return nextTheme;
}

function updateThemeToggleButtons(currentTheme) {
  const buttons = document.querySelectorAll("[data-theme-toggle]");
  buttons.forEach((btn) => {
    btn.setAttribute("aria-label", `Switch to ${currentTheme === "dark" ? "light" : "dark"} theme`);
    btn.setAttribute("title", `Switch to ${currentTheme === "dark" ? "light" : "dark"} theme`);
    
    const sunIcon = btn.querySelector(".theme-icon-sun");
    const moonIcon = btn.querySelector(".theme-icon-moon");
    
    if (sunIcon && moonIcon) {
      if (currentTheme === "dark") {
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
      } else {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
      }
    }
  });
}

if (typeof window !== "undefined") {
  window.initTheme = initTheme;
  window.toggleTheme = toggleTheme;
  window.setTheme = setTheme;
  window.getCurrentTheme = getCurrentTheme;
}

// Auto-run theme immediately so there is zero flash of unstyled theme
initTheme();
