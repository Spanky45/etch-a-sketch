const gridContainer = document.querySelector('.grid-container');
const gridLength = 1000;
const tileMargin = 2;

const swatchButtons = document.querySelectorAll('.swatch');
const swatchGroup = document.querySelector('.swatch-panel');

swatchGroup.addEventListener('click',(event) => {
    if (!event.target.classList.contains('swatch')) return;

    document.querySelectorAll('.swatch').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
});

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
    gridSelection.addEventListener('change', gridSelect)
    gridContainer.innerHTML = '';
    const value = gridSelection.value;
    if (gridSelection.value == '10x10') {
        createGrid(10);
    }
    else if (gridSelection.value == '20x20') {
        createGrid(20);
    }
    else if (gridSelection.value == '30x30') {
        createGrid(30);
    }
    else if (gridSelection.value == '40x40') {
        createGrid(40);
    }
    else if (gridSelection.value == '50x50') {
        createGrid(50);
    }
    else if (gridSelection.value == '60x60') {
        createGrid(60);
    }
    else if (gridSelection.value == '70x70') {
        createGrid(70);
    }
    else if (gridSelection.value == '80x80') {
        createGrid(80);
    }
    else if (gridSelection.value == '90x90') {
        createGrid(90);
    }
    else if (gridSelection.value == '100x100') {
        createGrid(100);
    }
}

gridSelect();