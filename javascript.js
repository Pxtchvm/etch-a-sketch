const divContainer = document.querySelector("#container");
const buttonGridSize = document.querySelector("button");
let gridSize = 16;

fillContainer();

buttonGridSize.addEventListener("click", () => {
    do {
        gridSize = +prompt("How many squares per side?", 16);
        if (isNaN(gridSize) || gridSize > 100) {
          alert("Please enter a valid number (up to 100 only)");
        }
    } while (isNaN(gridSize) || gridSize > 100);
    
    fillContainer();
});

function fillContainer() {
    divContainer.innerHTML = "";
    
    const divGridWidth = divContainer.clientWidth / gridSize;
    
    for (let column = 0; column < gridSize; column++) {
        for (let row = 0; row < gridSize; row++) {
            const divGrid = document.createElement('div');
            
            divGrid.style.backgroundColor = "white";
            divGrid.style.width = divGridWidth + "px";
            divGrid.style.height = divGridWidth + "px";
    
            divGrid.addEventListener("mouseover", () => {
                divGrid.style.backgroundColor = "black";
            })

            divContainer.appendChild(divGrid);
        }
    }
}