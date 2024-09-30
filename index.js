//random num generator
//rock choice
//paper choice
//scissors choice
//changes: condensed playTheGame else if statements into single else if statement, added semicolons, +result, +ties, +playerScore, +computerScore, added id playerScore and computerScore to html p tags, removed previous text content, removed extra comma from paper event listener

var emojis = ["✂️ ", "📃", "🪨",]
var emojiNum = 0;
var shuffleIntID = setInterval(emojiShuffle, 170);                         //set interval calls emojiShuffle every 170 milliseconds
var shuffleEmojis = document.querySelector("#emoji-shuffle");

let playerScore = document.querySelector('#playerScore');
playerCount = 0;
playerScore.textContent = playerCount;

let computerScore = document.querySelector('#computerScore');
computerCount = 0;
computerScore.textContent = computerCount;

let result = document.querySelector('#result');
result.textContent = '';

let ties = document.querySelector('#ties');
tiesCount = 0;
ties.textContent = tiesCount;

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => playTheGame("🪨"));
paper.addEventListener('click', () => playTheGame("📃"));
scissors.addEventListener('click', () => playTheGame("✂️ "));


function playTheGame(choice){
    //display player choice
    //get computer choice
    // display computer choice
    //display winner
    //change score
    var computerChoice = emojis[getNum(0,3)];                       //gets computer choice
    clearInterval(shuffleIntID);                                    //stops emoji shuffle for computer
    shuffleEmojis.textContent = computerChoice;                     //displays computer choice

    if(choice == computerChoice){                                   //determines winner
        tiesCount++
        ties.textContent = tiesCount;
        result.textContent = "It's a tie!";
    }
    else if(choice == '🪨' && computerChoice == '✂️ ' 
        || choice == '📃' && computerChoice == '🪨' 
        || choice == '✂️ ' && computerChoice == '📃'){
            playerCount++;
            playerScore.textContent = playerCount;
            result.textContent = 'Player wins!';
    }
    else{
        computerCount++;
        computerScore.textContent = computerCount;
        result.textContent = 'Computer wins!';
    }

};

function emojiShuffle(){
    comChoice = emojis[emojiNum];
    shuffleEmojis.textContent = comChoice;
    if(emojiNum < emojis.length - 1){
        emojiNum++;
    }
    else{
        emojiNum = 0;
    }
};

function getNum(min, max){                                      
    return Math.floor(Math.random() * (max-min))+ min;
};