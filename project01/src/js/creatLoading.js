export function creatLoading(parent) {
  const loadingArea = parent.querySelector(".loading");
  const loadingImg = document.createElement("img");
  loadingImg.alt = "loading";
  loadingImg.src = "./src/images/loading.gif";

  loadingArea.append(loadingImg);
}
