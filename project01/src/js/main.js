// ==== 뉴스 ====
import { creatLoading } from "./creatLoading.js";

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

// ==== 영화 ====

function createRanking(ranking) {
  const { title, summary, link, rank, thumnailImage } = ranking;

  const anchor = document.createElement("a");
  anchor.setAttribute("herf", link);
  anchor.innerHTML = `
     <div class="topRanking">
        <a href="${link}" target="_blank">
            <img src="${thumnailImage}" alt="thumbnail" class="thumbnail">
            <div class="information">
                <h3 class="title">${title}</h3>
                <p class="rank">${rank}</p>
                <div class="movie_text">
                    <p class="description">${summary}</p>
                </div>
            </div>
        </a>
     </div>`;

  return anchor;
}

function renderRanking() {
  const rankingSection = document.getElementById("rankingList");

  creatLoading(rankingSection);

  setTimeout(function () {
    fetch("./data/ranking.json")
      .then((res) => res.json())
      .then((data) => {
        const { ranking } = data;
        const Ranking = ranking.map((ranking) => createRanking(ranking));
        rankingSection.append(...Ranking);
      })

      .finally(() => {
        hideLoading(rankingSection);
      });
  }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
  renderRanking();
});
