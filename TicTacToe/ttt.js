//Global Variables
var painted;
var content;
var winningCombinations;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squaresFilled = 0;
var w;
var y;

//Instanciate Arrays
window.onload=function(){
    painted = [];
    content = [];
    winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    
    for(var l = 0; l <= 8; l++){
        painted[l] = false;
        content[l]='';
    }
    
    document.getElementById("alertext").innerHTML = "X's turn!";
    
}

//Game methods
function canvasClicked(canvasNumber){
    theCanvas = "canvas"+canvasNumber;
    c = document.getElementById(theCanvas);
    cxt = c.getContext("2d");
    
    if (painted[canvasNumber-1] === false){
        if(turn%2===0){
            cxt.beginPath();
            cxt.moveTo(10,10);
            cxt.lineTo(40,40);
            cxt.moveTo(40,10);
            cxt.lineTo(10,40);
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber-1] = 'X';
            document.getElementById("alertext").innerHTML = "O's turn!";
        }
        else {
            cxt.beginPath();
            cxt.arc(25,25,20,0,Math.PI*2,true);
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber-1] = 'O';
            document.getElementById("alertext").innerHTML = "X's turn!";
        }
    
        turn++;
        painted[canvasNumber-1] = true;
        squaresFilled++;
        if (squaresFilled==9){
            document.getElementById("alertext").innerHTML = "Game over!";
        }
        checkForWinners(content[canvasNumber-1]);
        
        
    }
}



function checkForWinners(symbol) {
    for (var a = 0; a < winningCombinations.length; a++) {
        if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]== symbol&&content[winningCombinations[a][2]]==symbol) {
            document.getElementById("alertext").innerHTML = symbol + " won!";
            playAgain();
        }
    }
}

function playAgain() {
    document.getElementById("alertext").innerHTML += "<br/>Reload to play again!";
    if(y) {
        location.reload(true);
    }
}
