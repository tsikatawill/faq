const openBtns = document.querySelectorAll(".open-btn");
const qCards = document.querySelectorAll(".question-card");
const qTitle = document.querySelector(".question-title");
const answer = document.querySelector(".answer");

openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentDiv = btn.parentElement.parentElement.parentElement;
    if (parentDiv.classList.contains("open")) {
      btn.innerText = "+";
      parentDiv.classList.remove("open");
      parentDiv.classList.add("closed");
    } else if (parentDiv.classList.contains("closed")) {
      btn.innerText = "-";
      parentDiv.classList.remove("closed");
      parentDiv.classList.add("open");
    }
  });
});
