import {creatLoading} from "./creatLoading.js";

function creatNewsElement(news) {
  const { title, summary, link } = news;
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");

  anchor.setAttribute("href", link);
  anchor.textContent = title;

  listItem.className = "news-item";
  listItem.append(anchor);

  return listItem;
}

function renderNew() {
  const NewsList = document.getElementById("news-list");

  creatLoading(NewsList);

  setTimeout(function () {
    fetch("./data/news.json")
      .then((res) => res.json())
      .then((data) => {
        const { news } = data;
        const newsList = news.map((news) => creatNewsElement(news));
        NewsList.append(...newsList);
      })

      .finally(() => {
        hideLoading(NewsList);
      });
  }, 1500);
}

document.addEventListener("DOMContentLoaded", function () {
  renderNew();
});

function hideLoading(parent) {
  const loading = parent.querySelector(".loading");
  loading.style.display = "none";
}
