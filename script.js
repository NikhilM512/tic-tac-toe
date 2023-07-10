var playerText = document.getElementById('playerText')
var boxes = Array.from(document.getElementsByClassName('box'));


const O_VAR = "O"
const X_VAR ="X"
let currentPlayer = X_VAR
let spaces = Array(9).fill(null)


const winningCombos =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [3,5,7],
    [1,5,9]
    
]

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click',boxClicked))
}
function boxClicked(e) {
   const id = e.target.id
   console.log(id, spaces)

   if(!spaces[id-1]){
    console.log("Hello")
    spaces[id-1] = currentPlayer
    e.target.innerText =currentPlayer

    if(playerHasWon()!==false){
        console.log("Won")
        playerText = `$(currentPlayer) has won the game!`
        let winning_blocks = playerHasWon()

       
    }
    currentPlayer = currentPlayer== X_VAR ? O_VAR : X_VAR
    }
} 


function playerHasWon(){
    for (const condition of winningCombos){
        let [a, b, c] = condition
        
        if (spaces[c-1]==spaces[b-1] && (spaces[a-1]==spaces[b-1] && spaces[a-1] == spaces[c-1])){
            return [a,b,c]
        }
    }
    return false
}

startGame()