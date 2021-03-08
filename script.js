
// Get all necessary DOM nodes
const container = document.querySelector('#container');
const clear = document.querySelector('#btn-clear');
const sizeButtons = document.querySelectorAll('.size-btn');
const colorButtons = document.querySelectorAll('.color-btn');

// AddEventListener to buttons
clear.addEventListener('click', clearGrid);
sizeButtons.forEach((button) => {button.addEventListener('click', createGrid);});
colorButtons.forEach((button) => {button.addEventListener('click', chooseColor);});

// Clear container function
function clearGrid() {
    let cells = container.querySelectorAll('.cell');
    cells.forEach(cell => {cell.style.backgroundColor = 'white'});
};

// Create div-cells function
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
function chooseColor() {
    let color = this.dataset.color;
    let cells = container.querySelectorAll('.cell');
    if (color == 'black') {
        colorBlack(cells);
    } else if (color == 'random') {
        colorRandom(cells);
    } else if (color == 'white') {
        colorWhite(cells);
    }
};

// Create coloring functions
function colorBlack(divs) {
    divs.forEach(div => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'black';
        });
    });
};

function colorWhite(divs) {
    divs.forEach(div => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'white';
        });
    });
};

function colorRandom(divs) {
    divs.forEach(div => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = getRandomColor();
        });
    });
};


// Helper function
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
