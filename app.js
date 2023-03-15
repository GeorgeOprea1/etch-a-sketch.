const container = document.getElementById("sketch-container");

function makeGrid(num) {
  container.style.setProperty("--grid-rows", num);
  container.style.setProperty("--grid-cols", num);
  for (c = 0; c < num * num; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeGrid(10);
