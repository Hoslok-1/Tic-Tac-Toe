const zero = document.getElementById('tile-1')
const one = document.getElementById('tile-2')
const two = document.getElementById('tile-3')
number = 0;

gameBoard = [0,0,0,0,0,0,0,0,0]
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
    console.log(number)
    console.log(gameBoard)
}


const playRound = (() => {
    const playRoundForZero = () =>{zero.textContent = gameBoard[0]}
    const playRoundForOne = () =>{one.textContent = gameBoard[1]}
    const playRoundForTwo = () =>{two.textContent = gameBoard[2]}
    return {playRoundForZero,playRoundForOne,playRoundForTwo}
})();

zero.addEventListener('click',function(){changeGameBoard(0);playRound.playRoundForZero()})
one.addEventListener('click', function(){changeGameBoard(1);playRound.playRoundForOne()})
two.addEventListener('click', function(){changeGameBoard(2);playRound.playRoundForTwo()})

