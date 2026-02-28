const gridContainer = document.querySelector('.grid-container');
const gridLength = 1000;
const tileMargin = 2;
// const gridSelection = document.querySelector('#grid-selection');

function createGrid(tilesPerSide) {

    const tileSize = gridLength / tilesPerSide - (tileMargin * 2);

    for (let i = 0; i < tilesPerSide ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-tile');
        div.style.width = `${tileSize}px`;
        div.style.height = `${tileSize}px`;
        div.style.margin = `${tileMargin}px`;
        gridContainer.appendChild(div);
    }
}

createGrid(20);

function gridSelect() {
    const gridSelection = document.querySelector('#grid-selection');
    const value = gridSelection.value;
    // console.log('selected value:', value);
    if (gridSelection.value == '10x10') {
        createGrid(10);
    }
    else if (gridSelection.value == '20x20') {
        createGrid(20);
    }
}

gridSelect();