const gridContainer = document.querySelector(".grid-container");
let defaultGridSize = 32;

function setupGridContainer(size){
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridRowColumns = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', () => {gridElement.style.backgroundColor = 'black'});
        gridContainer.appendChild(gridElement);
    }
}


window.onload = () => {
    setupGridContainer(defaultGridSize);
}