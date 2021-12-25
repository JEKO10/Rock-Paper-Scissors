const btns = document.querySelectorAll(".btn");
const info = document.querySelector(".info");
const switchDiv = document.querySelector(".switch");
const game = document.querySelector(".game");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const sciss = document.querySelector("#sciss");
const rules = document.querySelector(".rules");
const rulesBtn = document.querySelector("#rulesBtn");
const exitRules = document.querySelector("#exitRules");

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
    } else if (
      (computer.id === "rock" && user.id === "paper") ||
      (computer.id === "paper" && user.id === "sciss") ||
      (computer.id === "sciss" && user.id === "rock")
    ) {
      console.log("You won!");
    }
  });
});
