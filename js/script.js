const shareButton1 = document.getElementById("btn1");
const shareButton2 = document.getElementById("btn2");
const popUp = document.querySelector(".share-wrapper");
const bottom = document.querySelector(".bottom");
const shareLinksBottom = document.querySelector(".share-links-bottom");
const activeBtn = document.querySelector(".share-btn");

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 768) {
    bottom.classList.remove("hide");
    shareLinksBottom.classList.add("hide");
    return;
  }
});
shareButton1.addEventListener("click", (e) => {
  if (window.innerWidth < 768) {
    shareLinksBottom.classList.toggle("hide");
    bottom.classList.toggle("hide");
    return;
  }
  popUp.classList.toggle("active");
  activeBtn.classList.toggle("active");
});

shareButton2.addEventListener("click", (e) => {
  shareLinksBottom.classList.toggle("hide");
  bottom.classList.remove("hide");
  popUp.classList.remove("active");
});
