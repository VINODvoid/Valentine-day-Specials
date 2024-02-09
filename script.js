"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const audioElement = document.createElement("audio");
const MAX_IMAGES = 7;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

audioElement.src = "./i-love-you-cartoon-voice-136531.mp3";
audioElement.loop=true;
noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  const messages = [
    "You're the cat's whiskers! 😻",
    "You make my heart purr! 💖",
    "You're the cream to my coffee! ☕",
    "You're the cat's meow! 🐱",
    "You're the cat's pajamas! 😸",
    "Yaasss! 😽",
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  titleElement.innerHTML = messages[randomIndex];
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  catImg.style.borderRadius = "50%";
  catImg.style.boxShadow = "0 0 10px 10px #ff00ff";
  catImg.style.transform = "rotate(360deg)";
  catImg.style.transition = "all 4s";
  catImg.style.transitionTimingFunction = "ease-in-out";
  audioElement.play();
}


function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
    "last chance my Cutie Pie",
    "really 😭😭",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

