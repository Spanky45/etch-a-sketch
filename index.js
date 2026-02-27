const gridContainer = document.querySelector('.grid-container');

function createGrid(tiles) {
    for (let i = 0; i < tiles; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-tile');
        gridContainer.appendChild(div);
    }
}

createGrid(400);