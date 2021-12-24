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
