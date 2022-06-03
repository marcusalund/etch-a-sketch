const gridContainer = document.querySelector(".grid-container");
let defaultGridSize = 8;

function setupGridContainer(size){
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridRowColumns = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', () => {gridElement.style.backgroundColor = randomHex()});
        gridContainer.appendChild(gridElement);
    }
}

function resetGridContainer(size) {
    gridContainer.innerHTML = '';
    setupGridContainer(size);
}

function randomHex(){
    let randomColor = '';

    let r = 0;
    let g = Math.floor(Math.random()*256);
    let b = 0;

    randomColor = `rgb(${r}, ${g}, ${b})`;

    return randomColor;
}

const slider = document.querySelector('.slider');

slider.onchange = (e) => resetGridContainer(e.target.value);


window.onload = () => {
    setupGridContainer(defaultGridSize);
}