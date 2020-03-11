const maze = []
let counter = 1
let squareList 
let clickedId
let clickedSquare

let mazeHolder = document.getElementById('maze-holder')

function colorizer(e){
    clickedId = e.srcElement.id
    clickedSquare = document.getElementById(clickedId)
    // if(clickedSquare.style.cssText.includes('background: blue')){
    // clickedSquare.style.cssText += 'background: white'

    // } else {

    // }
    clickedSquare.style.cssText += 'background: blue'


}

function decolorizer(e){
    clickedId = e.srcElement.id
    clickedSquare = document.getElementById(clickedId)

    clickedSquare.style.cssText += 'background: white'
}

function makeMaze(){
    let square = document.createElement('div')
    square.className = 'maze-square'
    square.style = `height: 50px; width: 50px; border: 1px solid black; box-sizing: border-box; background: white`
    square.id = counter
    counter++

    square.addEventListener('click', e => colorizer(e))
    square.addEventListener('dblclick', e => decolorizer(e))
    
    maze.push(square)
    mazeHolder.appendChild(square)
    squareList = document.getElementsByClassName('maze-square')
}
let num 
let input = document.querySelector('#sizer')

input.addEventListener('keydown', e => {
    if(e.code === "Enter"){

        console.log(e.target.value)
        num = e.target.value
        for(let i = 0; i < (num * num + 1); i++){
            i ? makeMaze() : null
        }
        mazeHolder.style = `height: ${num * 50}px; width: ${num * 50}px; border: solid red 1px`
    }
})

input.addEventListener('keydown', e => {
    console.log(e)
    if(e.code === "Backspace"){        
        for(let i = 0; i < (num * num + 1); i++){
            squareList[0] ? squareList[0].remove(): null
            mazeHolder.style = ''
        }
    }
    
})


let queriedElement = document.querySelector('#outer-container')

console.log(queriedElement)






// // ---------------> end  of initial practice < ---------------------------

// const maze = [];
// let counter = 1;

// let clickedId;

// let clickedSquare;

// let mazeHolder = document.getElementById('maze-holder')

// function colorizer(e){
//    // console.log(e.srcElement.id)

//    clickedId = e.srcElement.id
//    clickedSquare = document.getElementById(clickedId)
//    clickedSquare.style.cssText += 'background: blue'

//    console.log(clickedSquare.style)
// }

// function makeMaze(){
//    let square = document.createElement('div')
//    square.className = 'maze-square'
//    square.style =   ` height: 50px; width: 50px; border: 1px solid black; box-sizing: border-box; background: white`
//    square.id = counter;
//    counter++;
   
//    square.addEventListener('click', e => colorizer(e))
   
   
//    maze.push(square)
//    mazeHolder.appendChild(square)



// }

// // makeMaze()

// let num = 10

// for(let i =0 ; i < (num * num + 1); i ++){
//    i ? makeMaze() : null
// }

// mazeHolder.style = `height: ${num *50}px; width: ${num * 50}px; border: solid red 1px`

