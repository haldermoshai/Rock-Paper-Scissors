// DOM MANIPULATION
const gameContainer = document.querySelector(".gameDiv");
const userResult = document.querySelector(".userResult img");
const cpuResult = document.querySelector(".cpuResult img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".userOption");

optionImages.forEach((image, _index) => {
 image.addEventListener("click", (e) => {
    image.classList.add("active");
    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait...";
  optionImages.forEach((image2, _index2) => {
    _index !== _index2 && image2.classList.remove("active");
  });
  gameContainer.classList.add("start");
  let time = setTimeout(() => {
    gameContainer.classList.remove("start");
    userResult.src = e.target.src;
    let randomNumber = Math.floor(Math.random() * 3);
    let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
    cpuResult.src = cpuImages[randomNumber];
    let cpuValue = ["R", "P", "S"][randomNumber];
    let userValue = ["R", "P", "S"][_index];
    let outcomes = {
      RR: "Draw",
      RP: "Cpu",
      RS: "User",
      PP: "Draw",
      PR: "User",
      PS: "Cpu",
      SS: "Draw",
      SR: "Cpu",
      SP: "User",
    };
    let outcomeValue = outcomes[userValue + cpuValue];
    if (userValue === cpuValue) {
      result.textContent = "Match Draw!"
    } else {
      result.textContent = `${outcomeValue} won!`
    }
  }, 2000);
 });
});