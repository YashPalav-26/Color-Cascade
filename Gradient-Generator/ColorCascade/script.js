"use strict";

const spans = document.querySelectorAll(".word span");

spans.forEach((span, idx) => {
  span.addEventListener("click", (e) => {
    e.target.classList.add("active");
  });
  span.addEventListener("animationend", (e) => {
    e.target.classList.remove("active");
  });

  setTimeout(() => {
    span.classList.add("active");
  }, 750 * (idx + 1));
});

const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const codeContainer = document.querySelector(".code-container");

let hexColors = "0123456789ABCDEF";

let gradientColor1 = "#004773";
let gradientColor2 = "#54D542";

const handleHexValueBtn1 = () => {
  let prefixHash = "#";

  for (let i = 0; i < 6; i++) {
    prefixHash = prefixHash + hexColors[Math.floor(Math.random() * 16)];
  }

  gradientColor1 = prefixHash;
  btn1.textContent = prefixHash;

  updateGradient();
};

const handleHexValueBtn2 = () => {
  let prefixHash = "#";

  for (let i = 0; i < 6; i++) {
    prefixHash = prefixHash + hexColors[Math.floor(Math.random() * 16)];
  }

  gradientColor2 = prefixHash;
  btn2.textContent = prefixHash;

  updateGradient();
};

const handleCopyText = () => {
  navigator.clipboard.writeText(codeContainer.textContent);
  alert("Code Copied Successfully!!");
};

const arrowButtons = document.querySelectorAll(".directions");
let direction = "to right top";

const updateGradient = () => {
  document.body.style.backgroundImage = `linear-gradient(${direction}, ${gradientColor1}, ${gradientColor2})`;
  codeContainer.textContent = `background-image: linear-gradient(${direction}, ${gradientColor1}, ${gradientColor2})`;
};

arrowButtons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    switch (idx) {
      case 0:
        direction = "to left bottom";
        break;
      case 1:
        direction = "to right";
        break;
      case 2:
        direction = "to top";
        break;
      case 3:
        direction = "to right top";
        break;
      case 4:
        direction = "to left top";
        break;
      case 5:
        direction = "to bottom";
        break;
      case 6:
        direction = "to left";
        break;
      case 7:
        direction = "to right bottom";
        break;
    }
    updateGradient();
  });
});

btn1.addEventListener("click", handleHexValueBtn1);
btn2.addEventListener("click", handleHexValueBtn2);
codeContainer.addEventListener("click", handleCopyText);

updateGradient();
