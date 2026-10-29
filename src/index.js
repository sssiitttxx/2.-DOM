import "./style.css";
import goblin from "./img/goblin.png";

const cells = [];

const container = document.getElementById("grid");
for (let i = 1; i <= 16; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  container.appendChild(cell);
  cells.push(cell);
}
const img = document.createElement("img");
img.src = goblin;
img.alt = "гоблин";
img.classList = "goblin";

let currentIndex = Math.floor(Math.random() * cells.length);
const randomCell = cells[currentIndex];
randomCell.appendChild(img);

setInterval(() => {
  let newIndex = Math.floor(Math.random() * cells.length);
  while (newIndex === currentIndex)
    newIndex = Math.floor(Math.random() * cells.length);
  cells[newIndex].appendChild(img);
  currentIndex = newIndex;
}, 1000);

console.log("webpack работает, картинка:", goblin);
