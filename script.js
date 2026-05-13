const pages = Array.from(document.querySelectorAll(".page"));
const tabs = Array.from(document.querySelectorAll("[data-page]"));
const nextButtons = Array.from(document.querySelectorAll("[data-next]"));

function showPage(id) {
  const target = document.getElementById(id) ? id : "start";

  pages.forEach((page) => {
    page.classList.toggle("active", page.id === target);
  });

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.page === target);
  });

  history.replaceState(null, "", `#${target}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => showPage(tab.dataset.page));
});

nextButtons.forEach((button) => {
  button.addEventListener("click", () => showPage(button.dataset.next));
});

window.addEventListener("hashchange", () => {
  showPage(location.hash.replace("#", "") || "start");
});

showPage(location.hash.replace("#", "") || "start");
