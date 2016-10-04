var drawCounter = 0;
var winCounter = 0;
var loseCounter = 0;

function compare(c1) {
    var c2 = aiMove();
    if (c1 === "rock") {
        document.getElementById("mymove").innerHTML = "You chose Rock!";
        document.getElementById("mymovepic").src = "images/rock.png";
        if (c2 === "rock") {
            draw();
        }
        else if (c2 === "paper") {
            lose();
        }
        else if (c2 === "scissors") {
            win();
        }
    }
    else if (c1 === "paper") {
        document.getElementById("mymove").innerHTML = "You chose Paper!";
        document.getElementById("mymovepic").src = "images/paper.png";
        if (c2 === "rock") {
            win();
        }
        else if (c2 === "paper") {
            draw();
        }
        else if (c2 === "scissors") {
            lose();
        }
    }
    else if (c1 === "scissors") {
        document.getElementById("mymove").innerHTML = "You chose Scissors!";
        document.getElementById("mymovepic").src = "images/scissors.png";
        if (c2 === "rock") {
            lose();
        }
        else if (c2 === "paper") {
            win();
        }
        else if (c2 === "scissors") {
            draw();
        }
    }
    
}
    
    
function draw() {
    
    document.getElementById("result").innerHTML = "Draw!";
    document.getElementById("drawcount").innerHTML = drawCounter += 1;
}
function win() {
    document.getElementById("result").innerHTML = "Win!";
    document.getElementById("wincount").innerHTML = winCounter += 1;
}
function lose() {
    document.getElementById("result").innerHTML = "Lose!";
    document.getElementById("losecount").innerHTML = loseCounter += 1;
}


function aiMove() {
    var aiChoice = Math.floor(Math.random()*3)+1;
    if (aiChoice === 1) {
        aiChoice = "rock";
        document.getElementById("aimove").innerHTML = "AI chose Rock!";
        document.getElementById("aimovepic").src = "images/rock.png";
    } else if (aiChoice === 2) {
        aiChoice = "paper";
        document.getElementById("aimove").innerHTML = "AI chose Paper!";
        document.getElementById("aimovepic").src = "images/paper.png";
    } else if (aiChoice === 3) {
        aiChoice = "scissors"; 
        document.getElementById("aimove").innerHTML = "AI chose Scissors!";
        document.getElementById("aimovepic").src = "images/scissors.png";
    }
    return aiChoice;
}