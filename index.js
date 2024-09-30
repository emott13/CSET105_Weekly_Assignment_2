//random num generator
//rock choice
//paper choice
//scissors choice
//changed emojiShuffle variable name, changed playTheGame else if statement conditions, changed event listener function calls to callbacks

var emojis = ["✂️ ", "📃", "🪨",]
var emojiNum = 0;
var shuffleIntID = setInterval(emojiShuffle, 170);
var shuffleEmojis = document.querySelector("#emoji-shuffle");

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => playTheGame(emojis[2]));
paper.addEventListener('click,', () => playTheGame(emojis[1]));
scissors.addEventListener('click', () => playTheGame(emojis[0]));


function playTheGame(choice){
    //display player choice
    //get computer choice
    // display computer choice
    //display winner
    //change score
    var computerChoice = emojis[getNum(0,3)];                       //gets computer choice
    clearInterval(shuffleIntID);                                    //stops emoji shuffle for computer
    if(choice == computerChoice){                                   //determines winner
        //add tie count
        //display result as tie
    }
    else if(choice == '🪨' && computerChoice == '✂️ '){
            return //player wins
    }
    else if(choice == '📃' && computerChoice == '🪨'){
            return //player wins
    }
    else if(choice == '✂️ ' && computerChoice == '📃'){
            return //player wins
    }
    else{
        return //computer wins
    }

}

function emojiShuffle(){
    comChoice = emojis[emojiNum];
    shuffleEmojis.textContent = comChoice;
    if(emojiNum < emojis.length - 1){
        emojiNum++;
    }
    else{
        emojiNum = 0;
    }
}

function getNum(min, max){                                      
    return Math.floor(Math.random() * (max-min))+ min;
}