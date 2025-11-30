const shareButton1 = document.getElementById("btn1");
const shareButton2 = document.getElementById("btn2");
const popUp = document.querySelector(".share-wrapper");
const bottom = document.querySelector(".bottom");
const shareBottom = document.querySelector(".share-bottom");

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 768) {
    bottom.classList.remove("hide");
    shareBottom.classList.add("hide");
    return;
  }
});
shareButton1.addEventListener("click", (e) => {
  if (window.innerWidth < 768) {
    shareBottom.classList.toggle("hide");
    bottom.classList.toggle("hide");
  }
  popUp.classList.toggle("active");
});

shareButton2.addEventListener("click", (e) => {
  shareBottom.classList.toggle("hide");
  bottom.classList.remove("hide");
  popUp.classList.remove("active");
});
