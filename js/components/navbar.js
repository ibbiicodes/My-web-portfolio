/**
 * Navbar & Mobile Navigation
 */
function initNavbar() {
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      mobileMenu.classList.toggle("hidden");
      if (hamburgerIcon) hamburgerIcon.classList.toggle("hidden");
      if (closeIcon) closeIcon.classList.toggle("hidden");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        if (hamburgerIcon) hamburgerIcon.classList.remove("hidden");
        if (closeIcon) closeIcon.classList.add("hidden");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

if (typeof window !== "undefined") {
  window.initNavbar = initNavbar;
}
