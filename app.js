let userScore = 0;
let computerScore = 0;

const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector('#computer-score');
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const computerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3); 
    return options[randomNumber];
}

const drawGame = () => {
    msg.innerText = "Game was draw!! play again";
    msg.style.backgroundColor = '#081b31';
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore;   
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
};


const playGame = (userChoice) => {
    console.log("user choice => ", userChoice);
    //generate computer choice
    const compChoice = computerChoice();
    console.log("computer choice => ", compChoice);
    if(userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==='rock'){
            userWin = compChoice==='paper' ? false : true;
        } else if(userChoice==='paper'){
            userWin = compChoice==='rock' ? true : false;
        } else{
            userWin = compChoice==='rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
