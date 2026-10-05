const container = document.querySelector("#container");
const changeGridButton = document.querySelector("#change-grid");

function createGrid(number) {
    const squareSize = 960 / number;

    for (let i = 0; i < number * number; i++) {
        const square = document.createElement("div");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = "black";

        square.addEventListener("mouseenter", function () {
            square.style.backgroundColor = "blue";
        });

        container.appendChild(square);
    }
}

createGrid(16);

changeGridButton.addEventListener("click", function () {
    const number = prompt("Enter the number of squares per side:");

    if (number <= 100) {
        container.innerHTML = "";
        createGrid(number);
    }
});