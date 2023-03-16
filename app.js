const container = document.getElementById("sketch-container");
const blackBtn = document.getElementById("black-btn");
const redBtn = document.getElementById("red-btn");
const blueBtn = document.getElementById("blue-btn");
const randomBtn = document.getElementById("random-btn");
const eraseBtn = document.getElementById("eraser-btn");
const clearBtn = document.getElementById("clear-btn");
const newGridBtn = document.getElementById("newGrid");
let num;
let gridcolor = true;
let color;

makeGrid(12); /* default grid value*/

/*this function creates the grid */

function makeGrid(num) {
  container.style.setProperty("--grid-rows", num);
  container.style.setProperty("--grid-cols", num);
  for (i = 0; i < num * num; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", function () {
      if (gridcolor) {
        cell.style.backgroundColor = color;
      } else {
        cell.style.backgroundColor = "#585858";
      }
    });
  }
}

blackBtn.addEventListener("click", function () {
  color = "black";
});

redBtn.addEventListener("click", function () {
  color = "red";
});
blueBtn.addEventListener("click", function () {
  color = "blue";
});

/*button that generates a random color */

randomBtn.addEventListener("click", function () {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  color = "#" + randomColor;
});

eraseBtn.addEventListener("click", function () {
  gridcolor = false;
});

clearBtn.addEventListener("click", function () {
  gridcolor = false;
  resetGridColor();
});

/* Resets all grid elements to default background  */
function resetGridColor() {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "#585858"));
}

newGridBtn.addEventListener("click", function () {
  /* removes the previous grid */
  let grid = document.querySelectorAll(".grid-item");
  grid.forEach((e) => e.remove());

  /*creates a new grid based on the number given by the user */
  let num = document.querySelector("input").value;
  makeGrid(num);
});
