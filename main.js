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
const random = Math.floor(Math.random() * 3);
const computer = symbol[random];

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const user = e.target;
    console.log(user);
    if (user.id === "rock") {
      console.log("rock");
    } else if (user.id === "paper") {
      console.log("paper");
    } else {
      console.log("sciss");
    }
  });
});
