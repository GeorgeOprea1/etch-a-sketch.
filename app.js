const container = document.getElementById("sketch-container");
const blackBtn = document.getElementById("black-btn");
const redBtn = document.getElementById("red-btn");
const blueBtn = document.getElementById("blue-btn");
const randomBtn = document.getElementById("random-btn");
const eraseBtn = document.getElementById("eraser-btn");
const clearBtn = document.getElementById("clear-btn");
const newGridBtn = document.getElementById("newGrid");
const yellowBtn = document.getElementById("yellow-btn");
const input = document.getElementById("input");
const gridValue = document.getElementById("grid-value");
const pickBtn = document.querySelector(".pick-btn");
const inputColor = document.getElementById("input-color");
let num;
let gridcolor = true;
let color;
let pickColor;
let mouseDown = false;
document.body.addEventListener("mousedown", function () {
  mouseDown = true;
});
document.body.addEventListener("mouseup", function () {
  mouseDown = false;
});

makeGrid(12); /* default grid value*/

/*this function creates the grid and change the color of cells*/

function makeGrid(num) {
  container.style.setProperty("--grid-rows", num);
  container.style.setProperty("--grid-cols", num);
  for (i = 0; i < num * num; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", changeColor);
    cell.addEventListener("mousedown", changeColor);
    function changeColor(e) {
      if (e.type === "mouseover" && !mouseDown) return;
      if (gridcolor) {
        cell.style.backgroundColor = color;
      } else {
        cell.style.backgroundColor = "#f2f1ef";
      }
    }
  }
}

blackBtn.addEventListener("click", function () {
  color = "#000";
  gridcolor = true;
});

redBtn.addEventListener("click", function () {
  color = "#fe1b22";
  gridcolor = true;
});
blueBtn.addEventListener("click", function () {
  color = "#034db5";
  gridcolor = true;
});

yellowBtn.addEventListener("click", function () {
  color = "#ffdd00";
  gridcolor = true;
});

/*button that generates a random color */

randomBtn.addEventListener("click", function () {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  color = "#" + randomColor;
  gridcolor = true;
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
  divs.forEach((div) => (div.style.backgroundColor = "#f2f1ef"));
}

newGridBtn.addEventListener("click", function () {
  /* removes the previous grid */
  let grid = document.querySelectorAll(".grid-item");
  grid.forEach((e) => e.remove());

  /*creates a new grid based on the number given by the user */
  let num = document.querySelector("input").value;
  makeGrid(num);
});

/* select grid size */
input.addEventListener("mousemove", function getGridValue(value) {
  gridValue.innerHTML = input.value;
});

/* pick the color from the color input */
inputColor.addEventListener("input", function () {
  pickColor = inputColor.value;
});

pickBtn.addEventListener("click", function () {
  color = pickColor;
  gridcolor = true;
  pickBtn.style.backgroundColor = pickColor;
});
