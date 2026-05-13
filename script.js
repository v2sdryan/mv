const pages = Array.from(document.querySelectorAll(".page"));
const pageIds = new Set(pages.map((page) => page.id));
const pageButtons = Array.from(document.querySelectorAll("[data-page]"));
const tabs = Array.from(document.querySelectorAll(".tab[data-page]"));
const nextButtons = Array.from(document.querySelectorAll("[data-next]"));
const topbar = document.querySelector(".topbar");
const pageMeta = {
  start: "開始",
  tools: "步驟",
  edit: "剪接",
  finish: "輸出",
};

function showPage(id) {
  const target = pageIds.has(id) ? id : "start";

  pages.forEach((page) => {
    page.classList.toggle("active", page.id === target);
  });

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.page === target);
  });

  document.body.dataset.currentPage = target;
  document.body.setAttribute("data-current-label", pageMeta[target] || "開始");
  topbar?.setAttribute("data-current-label", pageMeta[target] || "開始");

  history.replaceState(null, "", `#${target}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

pageButtons.forEach((button) => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});

nextButtons.forEach((button) => {
  button.addEventListener("click", () => showPage(button.dataset.next));
});

window.addEventListener("hashchange", () => {
  showPage(location.hash.replace("#", "") || "start");
});

showPage(location.hash.replace("#", "") || "start");
