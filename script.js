let numberOfDice = document.getElementById('number-of-dice');
let totalScore = document.getElementById('total-score');
let rollDiceBtn = document.getElementById('roll-dice');
let resetGameBtn = document.getElementById('reset-btn');
let imageDiv = document.getElementById('image');
let gameResult = document.getElementById('game-result');
let numberOfClicks = 0;
let diceCounter = 0;

function rollDice() {
    rollDiceBtn.addEventListener('click', function() {
        let randomNum = Math.floor(Math.random() * 6) + 1;
        numberOfClicks = numberOfClicks + 1;
        diceCounter = diceCounter + randomNum;
        numberOfDice.innerHTML = randomNum;
        if(numberOfClicks >= 5) {
            rollDiceBtn.style.display = 'none';
        }
        switch(randomNum) {
            case 1:
                imageDiv.src = './images/dice-1.png';
                break;
            
            case 2:
                imageDiv.src = './images/dice-2.png';
                break;

            case 3:
                imageDiv.src = './images/dice-3.png';
                break;

            case 4:
                imageDiv.src = './images/dice-4.png';
                break;

            case 5:
                imageDiv.src = './images/dice-5.png';
                break;

            case 6:
                imageDiv.src = './images/dice-6.png';
                break;
            default:
                imageDiv.src = '';
                break;
        }
        totalScore.textContent = diceCounter;
        if(rollDiceBtn.style.display === 'none' && diceCounter < 25) {
            gameResult.textContent = 'You loss. Please play again';
        }
        if(rollDiceBtn.style.display === 'none' && diceCounter >= 25) {
            gameResult.textContent = 'Hurray!!! You won the game. Play again.';
        }
    });
}

function resetGameBtnFunc() {
    resetGameBtn.addEventListener('click', function() {
        rollDiceBtn.style.display = 'inline-block';
        numberOfDice.innerHTML = '';
        imageDiv.src = '';
        totalScore.textContent = '';
        gameResult.textContent = '';
        numberOfClicks = 0;
        diceCounter = 0;
    });
}

rollDice();
resetGameBtnFunc()
// let counter = 0
// rollDiceBtn.addEventListener('click', function() {
//     counter = counter + 1;
//     console.log(counter)
    
// })
