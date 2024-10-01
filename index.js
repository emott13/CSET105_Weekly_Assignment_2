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
    
    setTimeout(()=>{                                                //restarts emoji shuffle
        emojiNum = 0                                                //resets emojiNum
        shuffleIntID = setInterval(emojiShuffle, 170);              //calls setIntveral again for emojiShuffle
        shuffleEmojis.textContent = '';                             //resets emoji displayed
    }, 1500);                                                       //1.8 second delay
};

function emojiShuffle(){                                            //shuffles emojis in computer choice
    comChoice = emojis[emojiNum];                                   //starts by calling index 0 of emoji array
    shuffleEmojis.textContent = comChoice;                          //displays emoji
    if(emojiNum < emojis.length - 1){                               //increases count of index number to cycle through each emoji
        emojiNum++;
    }
    else{                                                           //sets count back to 0 so it doesn't exceed index numbers
        emojiNum = 0;
    }
};

function getNum(min, max){                                          //random number generator for computer choice
    return Math.floor(Math.random() * (max-min))+ min;
};