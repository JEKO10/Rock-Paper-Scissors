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

let scoreNum = 0;

rulesBtn.addEventListener("click", () => {
  rules.style.display = "block";
  rulesBtn.style.display = "none";
  info.style.display = "none";
  switchDiv.style.display = "none";
  game.style.display = "none";
});

exitRules.addEventListener("click", () => {
  rules.style.display = "none";
  info.style.display = "flex";
  switchDiv.style.display = "flex";
  game.style.display = "block";
  rulesBtn.style.display = "block";
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
    } else if (
      (computer.id === "rock" && user.id === "sciss") ||
      (computer.id === "paper" && user.id === "rock") ||
      (computer.id === "sciss" && user.id === "paper")
    ) {
      score.innerHTML = scoreNum--;
      playerStatus.innerHTML = "You Lost!";
    } else if (
      (computer.id === "rock" && user.id === "paper") ||
      (computer.id === "paper" && user.id === "sciss") ||
      (computer.id === "sciss" && user.id === "rock")
    ) {
      score.innerHTML = scoreNum++;
      playerStatus.innerHTML = "You Won!";
    }
    result.style.display = "flex";
    rulesBtn.style.display = "none";
    switchDiv.style.display = "none";
    game.style.display = "none";
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
  });
});
// scissRes

reset.addEventListener("click", () => {
  result.style.display = "none";
  rulesBtn.style.display = "block";
  switchDiv.style.display = "flex";
  game.style.display = "block";
});
