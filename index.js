const gridContainer = document.querySelector('.grid-container');

function createGrid(tiles) {
    for (let i = 0; i < (tiles); i++) {
        const div = document.createElement('div');
        gridContainer.appendChild(div);
    }
}

createGrid(5);