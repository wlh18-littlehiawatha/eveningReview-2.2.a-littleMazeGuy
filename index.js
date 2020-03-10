const maze = [];
let counter = 1;

let mazeHolder = document.getElementById('maze-holder')

function makeMaze(){
   let square = document.createElement('div')
   square.className = 'maze-square'
   square.style =   ` height: 50px; width: 50px; border: 1px solid black; box-sizing: border-box; background: white`
   square.id = counter;
   counter++;
   maze.push(square)
   mazeHolder.appendChild(square)  //-------------------> issue on this line cannot read property of appendChild
}

// makeMaze()

let num = 10

for(let i =0 ; i < (num * num + 1); i ++){
   i ? makeMaze() : null
}

mazeHolder.style = `height: ${num *50}px; width: ${num * 50}px; border: solid red 1px`

