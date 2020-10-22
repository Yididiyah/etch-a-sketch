//TODO: Create a webpage with a 16x16 grid of square divs
//TODO: Best to put your grid squares inside another “container” div (that one can go directly in your html)
//TODO: Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
//TODO: Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to 
//TODO: 


function populateGrid(gridSide = 16){
    console.log('gridSide', gridSide);
    const container = document.querySelector('.container');
    for(let i = 1; i <= (gridSide*gridSide); i++){
        const gridItem =  document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);
        gridItem.style.backgroundColor = '#000'
        gridItem.addEventListener('mouseenter', () => {
        gridItem.style.backgroundColor = '#eee';
        })
    }
    // container.appendChild(grid);
}

function init(){
    const resetButton = document.querySelector('.btn');
    resetButton.addEventListener('click', () => {
        let gridItemInput = prompt('How many squares per side do you want?');
        if(gridItemInput > 100){
            gridItemInput = prompt('Please enter an amount less than 100');

        } else {
            document.documentElement.style.setProperty('--grid-items', `${gridItemInput}`);
            populateGrid(gridItemInput);
        }
    });
}

init();
populateGrid();


