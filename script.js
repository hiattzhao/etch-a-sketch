const container = document.querySelector("#container");

// Enter grid width
const btnEnterGridWidth = document.querySelector("#btnEnterGridWidth");
btnEnterGridWidth.addEventListener("click", inputGrid);

// Clear the grid container
const btnClear = document.querySelector("#btnClear");
btnClear.addEventListener("click", () => {
    while(container.firstChild) {
        container.firstChild.remove();
    }
});

// Input grid number
function inputGrid() {
    let grid = Number(prompt("Please enter a grid number"));
    if (grid > 100) {
        grid = prompt("Please enter a grid number less than 100");
    }
    drawGrid(grid);
}

// Draw a grid
function drawGrid(grid) {
    for (let i = 1; i <= grid*grid; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        if (i%grid === 0) {
            div.setAttribute("style", "width: 100%; border: 0; height: 0;");
        }
    }

    // Draw
    const divs = document.querySelectorAll("#container div");
    let opacityValue = 0;
    divs.forEach(div => {
        div.addEventListener("mouseover", (e) => {
            colorR = Math.floor(Math.random()*256);
            colorG = Math.floor(Math.random()*256);
            colorB = Math.floor(Math.random()*256);
            e.target.style.backgroundColor = `rgb(${colorR} ${colorG} ${colorB} /${opacityValue+=10}%)`;
        });
    });
}