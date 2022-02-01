//functions
function addGrid() { //Generates Grid and Color Event Listeners
    gridGen = slider.value;
    while (sketchPad.firstElementChild) {
        sketchPad.removeChild(sketchPad.firstElementChild);
    }
    for(let i = 0;i < gridGen;i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for(let x=0;x < gridGen;x++) {
            const column = document.createElement('div');
            column.classList.add('gridbox');
            row.appendChild(column);
        }
        sketchPad.appendChild(row);
    }
    const gridBoxes = document.querySelectorAll('.gridbox');
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener('mouseover',updateColor);
    });
}
function updateColor(e) {
        e.target.style['background-color'] = `${colorPicker.value}`;
}
//UI DOM Selectors
const slider = document.querySelector('.slider');
const counter = document.querySelector('.counter');
const sketchPad = document.querySelector('.sketch-pad');
const colorPicker = document.querySelector('.color-picker');
const reset = document.querySelector('.reset');
const eraser = document.querySelector('.eraser')

//Default Parameters on Start
let gridGen = slider.value;
slider.value = 16;
counter.textContent = `${slider.value}x${slider.value}`;
addGrid();

//Event Listeners
slider.addEventListener('input',addGrid);
slider.addEventListener('input',(e) => {
    counter.textContent = `${slider.value}x${slider.value}`;
    gridGen = slider.value;
});
reset.addEventListener('click',addGrid); //Reset
eraser.addEventListener('click',() => colorPicker.value = '#FFFFFF');

