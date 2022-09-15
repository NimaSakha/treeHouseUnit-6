// dom variable
const overlay = document.querySelector("#overlay");
const startBTN = document.querySelector(".btn__reset");
const keyBoard = document.querySelector("#qwerty");
const button = document.getElementsByTagName("button");
const win = document.querySelector(".win");
const list = document.querySelector("#phrase ul");

// word guess var
const phrase = ["world", "resting", "magic", "green", "tickle"];
const num = Math.floor(Math.random() * 5);
let letter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const guess = phrase[num];

//lives var
let missed = 0;
let right = false;
let done = [];
let letteri = letter;
let used = false;

//start btn
startBTN.addEventListener("click", () => {
  if (startBTN.textContent !== "Start Game") {
    location.reload();
  }
  overlay.style.display = "none";
});
//word display
for (let i = 0; i < guess.length; i++) {
  const x = document.createElement("LI");
  x.className = "letter";
  x.setAttribute("id", `h${i}`);
  list.appendChild(x);
  let t = document.createTextNode(guess[i]);
  x.appendChild(t);
  x.style.transition = "1s";
}

//keyboard

// if letter has already been pressed

keyBoard.addEventListener("click", (e) => {
  const x = document.querySelector(".letter");
  for (let i = 0; i < guess.length; i++) {
    let x = document.querySelector(`#h${i}`);
    for (let i = 0; i < letter.length; i++) {
      if (e.target.textContent === letter[i]) {
        letteri = letter[i];
        if (x.textContent === letteri) {
          x.className = "letter show";
          right = true;
        }
      }
    }
  }

  const heart = Array.from(document.querySelectorAll(".tries")).pop();

  for (let i = -1; i < done.length; i++) {
    if (done[i] === letteri) {
      used = true;
    }
  }
  done.push(letteri);
  if (used !== true) {
    if (right !== true && e.target.tagName === "BUTTON") {
      missed++;
      let dead = document.createElement("li");
      dead.innerHTML =
        '<img src="images/lostHeart.png" height="35px" width="30px">';
      heart.parentNode.replaceChild(dead, heart);
      dead.className = "dead";
    }
  }

  right = false;
  used = false;
  const correct = document.querySelectorAll(".show").length;
  if (missed === 5) {
    overlay.className = "start lose";
    overlay.style.display = "flex";
    startBTN.textContent = "Try Again";
  } else if (correct === guess.length) {
    overlay.className = "start win";
    overlay.style.display = "flex";
    startBTN.textContent = "Play Again";
  }
});
