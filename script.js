const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const questions = document.querySelector(".questions");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
var s = document.querySelector(".muse");

s.addEventListener("click",function(){
    var Audiobe = new Audio("taylor.mp3");
    Audiobe.play();
    s.style.display = "none";
    gif.src =
    "https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif";
  
  })

  

yesBtn.addEventListener("click", () => {
  question.innerHTML = "kasi wala kang choice di mo mapipindot yung NO haha..";
  questions.innerHTML = "yiieee.. I knew it! di ka mamakakatanggi";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

