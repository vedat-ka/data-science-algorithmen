// ---- Tab Navigation ----
const tabs   = document.querySelectorAll(".navbar a[data-tab]");
const panels = document.querySelectorAll(".tab-panel");

function showTab(tabId) {
  tabs.forEach(t => t.classList.remove("active"));
  panels.forEach(p => p.classList.remove("active"));
  const tab   = document.querySelector(`.navbar a[data-tab="${tabId}"]`);
  const panel = document.getElementById(tabId);
  if (tab)   tab.classList.add("active");
  if (panel) panel.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();
    showTab(tab.dataset.tab);
  });
});

// Always start on Entscheidungshilfe on page load/refresh
showTab("guide");

// ---- Back to Top ----
const btn = document.getElementById("back-top");
window.addEventListener("scroll", () => {
  btn.classList.toggle("visible", window.scrollY > 400);
});
