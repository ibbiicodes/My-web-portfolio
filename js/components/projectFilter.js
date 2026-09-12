/**
 * Project Filter Component
 */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-filter");

      // Reset all buttons
      filterBtns.forEach((b) => {
        b.className =
          "filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800/60";
        const badge = b.querySelector(".filter-badge");
        if (badge) badge.className = "filter-badge text-[10px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-400";
      });

      // Highlight active button
      btn.className =
        "filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 bg-indigo-600 text-white shadow-lg shadow-indigo-600/30";
      const activeBadge = btn.querySelector(".filter-badge");
      if (activeBadge) activeBadge.className = "filter-badge text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-700/60 text-indigo-100";

      // Filter cards
      const cards = document.querySelectorAll("[data-project-card]");
      cards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (selected === "all" || category === selected) {
          card.classList.remove("hidden");
          card.classList.add("animate-fadeIn");
        } else {
          card.classList.add("hidden");
          card.classList.remove("animate-fadeIn");
        }
      });
    });
  });
}

if (typeof window !== "undefined") {
  window.initProjectFilter = initProjectFilter;
}
