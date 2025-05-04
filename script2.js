const gridContainerEl = document.querySelector(".container");
const gridChangeBtn = document.querySelector(".grid-change-btn");
const toggleBtn = document.querySelector(".toggle-btn");
const eraseBtn = document.querySelector(".erase-btn");

let gridSize = 16; // 16x16
let totalSketchCells = 16 * 16;

let gridContainerSize = 630.4;
let isColorModeActive = false;

let currentLastRowCell = gridSize * gridSize - gridSize + 1; // Starts at first cell of the Last Row

createInteractiveGrid(totalSketchCells, gridSize, currentLastRowCell);

gridChangeBtn.addEventListener("click", function () {
  gridSize = prompt("Enter a number not more than 100", 16);

  if (gridSize > 100 || !gridSize) {
    alert("Please enter a valid grid size (1-100).");
    return;
  }

  totalSketchCells = gridSize * gridSize;

  gridContainerEl.innerHTML = "";

  let currentLastRowCell = gridSize * gridSize - gridSize + 1;

  createInteractiveGrid(totalSketchCells, gridSize, currentLastRowCell);
});

toggleBtn.addEventListener("click", () => {
  if (!isColorModeActive) {
    isColorModeActive = true;
    toggleBtn.textContent = "Black Mode ⚫";
  } else {
    isColorModeActive = false;
    toggleBtn.textContent = "Color Mode 🌈";
  }
});

eraseBtn.addEventListener("click", () => {
  gridContainerEl.innerHTML = "";
  currentLastRowCell = gridSize * gridSize - gridSize + 1;
  createInteractiveGrid(totalSketchCells, gridSize, currentLastRowCell);
});

// FUNCTIONS
function createInteractiveGrid(totalSketchCells, gridSize, currentLastRowCell) {
  for (let i = 1; i <= totalSketchCells; i++) {
    let sketchCell = document.createElement("div");
    sketchCell.style.width = `calc(${gridContainerSize}px / ${gridSize})`;
    sketchCell.style.height = `calc(${gridContainerSize}px / ${gridSize})`;
    sketchCell.classList.add("item");

    gridContainerEl.appendChild(sketchCell);

    // If i (the current sketch cell) is divisible by gridSize, it's the last cell in the row — so remove its right border.
    if (i % gridSize === 0) {
      sketchCell.style.borderRight = 0;
    }

    // Once i (the current sketch cell) reaches the first cell of the last row (e.g., in a 16×16 grid, cell 241),
    // remove its border-bottom — then iteratively for the rest.
    if (i === currentLastRowCell) {
      sketchCell.style.borderBottom = 0;
      currentLastRowCell += 1;
    }

    let darknessLevel = 0;

    sketchCell.addEventListener("mouseenter", (e) => {
      if (!isColorModeActive) {
        sketchCell.style.backgroundColor = "rgba(0, 0, 0, 1)";
      } else {
        if (
          sketchCell.style.backgroundColor === "" ||
          sketchCell.style.backgroundColor === "rgb(0, 0, 0)"
        ) {
          let randomColor = GenerateRandomColor();
          sketchCell.style.backgroundColor = randomColor;
        } else {
          darknessLevel = Number((darknessLevel + 0.1).toFixed(1)); // increase darknessLevel by 0.1

          if (sketchCell.children.length > 0) {
            if (
              sketchCell.children[0].style.backgroundColor === "rgb(0, 0, 0)"
            ) {
              let randomColor = GenerateRandomColor();
              sketchCell.style.backgroundColor = randomColor;
              darknessLevel = 0;
            }

            sketchCell.children[0].style.backgroundColor = `rgba(0, 0, 0, ${darknessLevel})`;
          } else {
            let darkOverlay = document.createElement("div");
            darkOverlay.style.width = "100%";
            darkOverlay.style.height = "100%";
            darkOverlay.style.backgroundColor = `rgba(0, 0, 0, ${darknessLevel})`;
            sketchCell.appendChild(darkOverlay);
          }
        }
      }
    });
  }
}

function GenerateRandomColor() {
  let randomNumber1 = Math.floor(Math.random() * 255) + 1;
  let randomNumber2 = Math.floor(Math.random() * 255) + 1;
  let randomNumber3 = Math.floor(Math.random() * 255) + 1;
  let randomColor = `rgba(${randomNumber1}, ${randomNumber2}, ${randomNumber3}, 1)`;

  return randomColor;
}
