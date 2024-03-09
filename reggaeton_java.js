window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("header").style.fontSize = "2vw";
    document.getElementById("header").style.height = "5%";
    document.getElementById("subtitle").style.opacity = "0";
    document.getElementById("headerimage").style.opacity = "0";
    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("navbar").style.color = "#d41c1b";
    document.getElementById("title").style.width = "30vw";
  } else {
    document.getElementById("header").style.fontSize = "6.8vw";
    document.getElementById("header").style.height = "100%";
    document.getElementById("subtitle").style.opacity = "1";
    document.getElementById("headerimage").style.opacity = "1";
    document.getElementById("navbar").style.opacity = "0";
    document.getElementById("navbar").style.color = "#000000";
    document.getElementById("title").style.width = "100vw";
  }
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const audio = document.querySelector("audio");

// Example: Add custom play/pause buttons
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

playButton.addEventListener("click", () => {
  audio.play();
});

pauseButton.addEventListener("click", () => {
  audio.pause();
});

// Function to replace instances of a specific word with a different typeface
function replaceWordWithCustomFont(word, className) {
  const elements = document.body.getElementsByTagName("*");
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.nodeType === 3) {
      // Text node
      const text = element.nodeValue;
      const replacedText = text.replace(
        new RegExp("\\b" + word + "\\b", "gi"),
        `<span class="${className}">${word}</span>`
      );
      if (replacedText !== text) {
        const wrapper = document.createElement("span");
        wrapper.innerHTML = replacedText;
        element.parentNode.replaceChild(wrapper, element);
      }
    }
  }
}

// Set the desired scroll position (in pixels)
// Set the desired scroll position (in pixels)
var desiredScrollPosition = 0;

window.onload = function () {
  scrollFunction(); // Execute scrollFunction to handle initial styling
  applyCustomFontToQuestionMarks();
};

function applyCustomFontToQuestionMarks() {
  const elementsWithQuestionMarks =
    document.querySelectorAll('*:contains("?")');

  elementsWithQuestionMarks.forEach((element) => {
    const textContent = element.innerHTML;
    const replacedText = textContent.replace(
      /\?/g,
      `<span class="custom-font">?</span>`
    );
    if (replacedText !== textContent) {
      element.innerHTML = replacedText;
    }
  });
}

function myFunction() {
  var x = document.getElementById("biblio-button");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
