const gridContainer = document.querySelector('.grid-container');
const gridLength = 1000
const tileMargin = 2;

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

// function poop(tileNumber) {

// }