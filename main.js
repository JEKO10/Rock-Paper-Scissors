const btns = document.querySelectorAll(".btn");
const info = document.querySelector(".info");
const score = document.querySelector("#score");
const switchDiv = document.querySelector(".switch");
const game = document.querySelector(".game");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const sciss = document.querySelector("#sciss");
const rules = document.querySelector(".rules");
const rulesBtn = document.querySelector("#rulesBtn");
const exitRules = document.querySelector("#exitRules");
const result = document.querySelector(".result");
const playerStatus = document.querySelector("#status");
const reset = document.querySelector("#reset");
const userPicked = document.querySelector("#userPicked");
const userImg = document.querySelector("#userPicked img");
const houseImg = document.querySelector("#housePicked img");
const housePicked = document.querySelector("#housePicked");
const toggleDiv = document.querySelector(".switch");
const toggle = document.querySelector("#input");
const logo = document.querySelector("#logo");
const rulesImg = document.querySelector("#rulesImg");
const hard = document.querySelector(".hard");

let scoreNum = 0;

rulesBtn.addEventListener("click", () => {
  rules.style.display = "block";
  rulesBtn.style.display = "none";
  info.style.display = "none";
  switchDiv.style.display = "none";
  game.style.display = "none";
  hard.style.display = "none";
});

exitRules.addEventListener("click", () => {
  rules.style.display = "none";
  info.style.display = "flex";
  switchDiv.style.display = "flex";
  rulesBtn.style.display = "block";
  if (toggleDiv.classList.contains("open")) {
    hard.style.display = "block";
  } else {
    game.style.display = "block";
  }
});

const symbol = [rock, paper, sciss];

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const random = Math.floor(Math.random() * 3);
    const computer = symbol[random];
    const user = e.target;
    if (
      (computer.id === "rock" && user.id === "rock") ||
      (computer.id === "paper" && user.id === "paper") ||
      (computer.id === "sciss" && user.id === "sciss")
    ) {
      playerStatus.innerHTML = "Draw!";
      userPicked.classList.remove("winner");
      housePicked.classList.remove("winner");
    } else if (
      (computer.id === "rock" && user.id === "sciss") ||
      (computer.id === "paper" && user.id === "rock") ||
      (computer.id === "sciss" && user.id === "paper")
    ) {
      score.innerHTML = scoreNum--;
      playerStatus.innerHTML = "You Lost!";
      housePicked.classList.add("winner");
      userPicked.classList.remove("winner");
    } else if (
      (computer.id === "rock" && user.id === "paper") ||
      (computer.id === "paper" && user.id === "sciss") ||
      (computer.id === "sciss" && user.id === "rock")
    ) {
      score.innerHTML = scoreNum++;
      playerStatus.innerHTML = "You Won!";
      userPicked.classList.add("winner");
      housePicked.classList.remove("winner");
    }
    result.style.display = "flex";
    rulesBtn.style.display = "none";
    switchDiv.style.display = "none";
    game.style.display = "none";
    hard.style.display = "none";
    score.innerHTML = scoreNum;
    if (user.id === "rock") {
      userImg.src = "./images/icon-rock.svg";
      userPicked.id = "rockRes";
    } else if (user.id === "paper") {
      userImg.src = "./images/icon-paper.svg";
      userPicked.id = "paperRes";
    } else if (user.id === "sciss") {
      userImg.src = "./images/icon-scissors.svg";
      userPicked.id = "scissRes";
    }
    if (computer.id === "rock") {
      houseImg.src = "./images/icon-rock.svg";
      housePicked.id = "rockRes";
    } else if (computer.id === "paper") {
      houseImg.src = "./images/icon-paper.svg";
      housePicked.id = "paperRes";
    } else if (computer.id === "sciss") {
      houseImg.src = "./images/icon-scissors.svg";
      housePicked.id = "scissRes";
    }
  });
});
// scissRes

reset.addEventListener("click", () => {
  result.style.display = "none";
  rulesBtn.style.display = "block";
  switchDiv.style.display = "flex";
  if (toggleDiv.classList.contains("open")) {
    hard.style.display = "block";
  } else {
    game.style.display = "block";
  }
});

toggle.addEventListener("click", () => {
  toggleDiv.classList.toggle("open");
  scoreNum = 0;
  score.innerHTML = scoreNum;
  if (toggleDiv.classList.contains("open")) {
    game.style.display = "none";
    hard.style.display = "block";
    logo.src = "./images/logo-bonus.svg";
    rulesImg.src = "./images/image-rules-bonus.svg";
  } else {
    game.style.display = "block";
    hard.style.display = "none";
    logo.src = "./images/logo.svg";
    rulesImg.src = "./images/image-rules.svg";
  }
});
