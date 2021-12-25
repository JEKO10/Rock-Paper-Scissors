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
const reset = document.querySelector("#reset");

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
    console.log(user);
    console.log(computer);
    if (
      (computer.id === "rock" && user.id === "rock") ||
      (computer.id === "paper" && user.id === "paper") ||
      (computer.id === "sciss" && user.id === "sciss")
    ) {
      console.log("Draw!");
    } else if (
      (computer.id === "rock" && user.id === "sciss") ||
      (computer.id === "paper" && user.id === "rock") ||
      (computer.id === "sciss" && user.id === "paper")
    ) {
      console.log("You lost!");
      score.innerHTML = scoreNum--;
    } else if (
      (computer.id === "rock" && user.id === "paper") ||
      (computer.id === "paper" && user.id === "sciss") ||
      (computer.id === "sciss" && user.id === "rock")
    ) {
      console.log("You won!");
      score.innerHTML = scoreNum++;
    }
    result.style.display = "flex";
    rulesBtn.style.display = "none";
    switchDiv.style.display = "none";
    game.style.display = "none";
    score.innerHTML = scoreNum;
  });
});

reset.addEventListener("click", () => {
  result.style.display = "none";
  rulesBtn.style.display = "block";
  switchDiv.style.display = "flex";
  game.style.display = "block";
});
