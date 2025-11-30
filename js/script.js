const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const popUp = document.querySelector(".share-wrapper");
const mbottom = document.querySelector(".michelle-bottom");
const slb = document.querySelector(".share-links-bottom");
const activeBtn = document.querySelector(".share-btn");

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 768) {
    mbottom.classList.remove("hide");
    slb.classList.add("hide");
    return;
  }
});
btn1.addEventListener("click", (e) => {
  if (window.innerWidth < 768) {
    slb.classList.toggle("hide");
    mbottom.classList.toggle("hide");
    return;
  }
  popUp.classList.toggle("active");
  activeBtn.classList.toggle("active");
});

btn2.addEventListener("click", (e) => {
  slb.classList.toggle("hide");
  mbottom.classList.remove("hide");
  popUp.classList.remove("active");
});
