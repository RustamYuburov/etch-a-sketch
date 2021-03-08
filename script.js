
// Get all necessary DOM nodes
const container = document.querySelector('#container');
const clear = document.querySelector('#btn-clear');
const sizeButtons = Array.from(document.querySelectorAll('.size-btn'));
const colorButtons= Array.from(document.querySelectorAll('.color-btn'));

let cells = [];

// Create div-cells function

function createDiv(size) {
    for (let i = 0; i < size; i++) {
        let cell = document.createElement('div');
        cell.style.border = 'solid #000'
        container.appendChild(cell);
    }
}

// Clear container function
clear.addEventListener('click', clearGrid);

function clearGrid(cellArray) {
    cellArray.forEach(cell => {
        cell.classList.remove('cell');
    });
}