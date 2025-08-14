const container = document.querySelector('.container')
const sizeButton = document.querySelector('#size-button')

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

function createGrid(size)
{   
    container.innerHTML = ''; //clears old grid

    const totalSquares = size*size;
    const divSize = 960/size;


for(let i=0; i<totalSquares; i++){
    const newDiv = document.createElement('div');
    newDiv.style.width = `${divSize}px`;
    newDiv.style.height = `${divSize}px`;
    newDiv.addEventListener('mouseover', () =>{
    newDiv.style.backgroundColor = getRandomColor()});

    container.appendChild(newDiv);
}

}


function changeGridSize(){
const input = prompt("Enter the size of grid");

if(input === null){
    return;
}

const newSize = parseInt(input);

if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
} else {
    createGrid(newSize);
}
}

createGrid(16);

sizeButton.addEventListener('click', changeGridSize);