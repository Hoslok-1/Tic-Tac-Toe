const zero = document.getElementById('tile-1')
const one = document.getElementById('tile-2')
const two = document.getElementById('tile-3')
const three = document.getElementById('tile-4')
const four = document.getElementById('tile-5')
const five = document.getElementById('tile-6')
const six = document.getElementById('tile-7')
const seven = document.getElementById('tile-8')
const eight = document.getElementById('tile-9')



const winner = document.getElementById('temp')
number = 0;
let gameBoard = [0,0,0,0,0,0,0,0,0]
let win = false
let alpt;


const playRound = (() => {
    const playRoundForZero = () =>{zero.textContent = gameBoard[0]}
    const playRoundForOne = () =>{one.textContent = gameBoard[1]}
    const playRoundForTwo = () =>{two.textContent = gameBoard[2]}
    const playRoundForThree = () =>{three.textContent = gameBoard[3]}
    const playRoundForFour = () =>{four.textContent = gameBoard[4]}
    const playRoundForFive = () =>{five.textContent = gameBoard[5]}
    const playRoundForSix = () =>{six.textContent = gameBoard[6]}
    const playRoundForSeven = () =>{seven.textContent = gameBoard[7]}
    const playRoundForEight = () =>{eight.textContent = gameBoard[8]}


    return {playRoundForZero,playRoundForOne,playRoundForSix,playRoundForSeven,playRoundForEight,playRoundForTwo,playRoundForThree,playRoundForFour,playRoundForFive}
})();

function checkForWin()
{
    win = false

    if(gameBoard[0] == gameBoard[1] && gameBoard[1] == gameBoard[2] && gameBoard[0] != 0)
    {
        win = true
        console.log("W")
        alpt = gameBoard[2];

    }
    else if(gameBoard[3] == gameBoard[4] && gameBoard[4] == gameBoard[5] && gameBoard[3] != 0)
    {
        win = true
        console.log("W")
        alpt = gameBoard[3];

    }
    else if(gameBoard[6] == gameBoard[7] && gameBoard[7] == gameBoard[8] && gameBoard[6] != 0)
    {
        win = true
        console.log("W")
        alpt = gameBoard[6];

    }
    else if(gameBoard[0] == gameBoard[3] && gameBoard[3] == gameBoard[6] && gameBoard[0] != 0)
    {
        win = true
        console.log("W")
        alpt = gameBoard[23];

    }
    else if(gameBoard[1] == gameBoard[4] && gameBoard[4] == gameBoard[7] && gameBoard[3] != 0)
    {
        win = true
        console.log("W")
        alpt = gameBoard[1];

    }
    else if(gameBoard[2] == gameBoard[5] && gameBoard[5] == gameBoard[8] && gameBoard[6] != 0)
    {
        win = true
        console.log("W")
        alpt = gameBoard[2];

    }
    else if(gameBoard[0] == gameBoard[4] && gameBoard[4] == gameBoard[8] && gameBoard[0] != 0)
    {
        win = true
        console.log("W")
        alpt = gameBoard[0];

    }
    else if(gameBoard[2] == gameBoard[4] && gameBoard[4] == gameBoard[6] && gameBoard[2] != 0)
    {
        win = true
        console.log("W")
        alpt = gameBoard[2];
    }

    return win;
}

function  changeGameBoard(num)
{
    if (gameBoard[num] == 0 )
    {
        if(number % 2 == 0)
        {
            gameBoard[num] = "X"
            number++;
        }
        else
        {
            gameBoard[num] = "O"
            number++;
        }
    }
    //console.log(number)
    console.log(gameBoard)
    if(checkForWin())
    {
        winner.textContent = alpt+" wins"
    }
}



zero.addEventListener('click',function(){changeGameBoard(0);playRound.playRoundForZero()})
one.addEventListener('click', function(){changeGameBoard(1);playRound.playRoundForOne()})
two.addEventListener('click', function(){changeGameBoard(2);playRound.playRoundForTwo()})
three.addEventListener('click', function(){changeGameBoard(3);playRound.playRoundForThree()})
four.addEventListener('click', function(){changeGameBoard(4);playRound.playRoundForFour()})
five.addEventListener('click', function(){changeGameBoard(5);playRound.playRoundForFive()})
six.addEventListener('click', function(){changeGameBoard(6);playRound.playRoundForSix()})
seven.addEventListener('click', function(){changeGameBoard(7);playRound.playRoundForSeven()})
eight.addEventListener('click', function(){changeGameBoard(8);playRound.playRoundForEight()})


