
// Get all necessary DOM nodes
const container = document.querySelector('#container');
const clear = document.querySelector('#btn-clear');
const sizeButtons = document.querySelectorAll('.size-btn');
const colorButtons = document.querySelectorAll('.color-btn');

// Clear container function
clear.addEventListener('click', clearGrid);
function clearGrid() {
    let cells = container.querySelectorAll('.cell');
    cells.forEach(cell => {cell.style.backgroundColor = 'white'});
};

// Create div-cells function
sizeButtons.forEach((button) => {
    button.addEventListener('click', createGrid);
});

function createGrid() {
    container.className = '';
    container.innerHTML = '';
    let size = this.dataset.size;
    container.classList.add(`cell-${size}`);
    for (let i = 1; i <= size * size; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

// Create color chosing function
colorButtons.forEach((button) => {
    button.addEventListener('click', chooseColor);
});

function chooseColor() {
    let color = this.dataset.color;
    let cells = container.querySelectorAll('.cell');
    if (color == 'black') {
        colorBlack(cells);
    } else if (color == 'random') {
        colorRandom(cells);
    } else {
        incrementDark(cells);
    }
    // if (color == 'black') {
    //     let cells = container.querySelectorAll('.cell');
    //     cells.forEach(cell => {
    //         cell.addEventListener('mouseenter', () => {
    //             cell.style.backgroundColor = 'black';
    //         });
    //     })
    // }
};

// Create colors functions