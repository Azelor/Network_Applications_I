
/*
function logic(x, y) {
    var yourChoice = x;
    var aiChoice = y;
    if (aiChoice === 1) {
        aiChoice = "rock"; 
    } else if (aiChoice === 2) {
        aiChoice = "paper"; 
    } else if (aiChoice === 3) {
        aiChoice = "scissors"; 
    }
}
*/

function compare(c1) {
    var c2 = aiMove();
    if (c1 === "rock") {
        if (c2 === "rock") {
          return "tie";
        }
        else if (c2 === "paper") {
          return "lose";
        }
        else if (c2 === "scissors") {
          return "win";
        }
    }
    else if (c1 === "paper") {
        if (c2 === "rock") {
          return "win";
        }
        else if (c2 === "paper") {
          return "tie";
        }
        else if (c2 === "scissors") {
          return "lose";
        }
    }
    else if (c1 === "scissors") {
        if (c2 === "rock") {
          return "lose";
        }
        else if (c2 === "paper") {
          return "win";
        }
        else if (c2 === "scissors") {
          return "tie";
        }
    }
}
    
    
}


function aiMove() {
    var aiChoice = Math.floor(Math.random()*3)+1;
    if (aiChoice === 1) {
        aiChoice = "rock"; 
    } else if (aiChoice === 2) {
        aiChoice = "paper"; 
    } else if (aiChoice === 3) {
        aiChoice = "scissors"; 
    }
    return aiChoice;
}
        
/*
function result() {
    var ai = 1;
    alert("ai");
    if (ai === 1) { alert("ai chose rock")};
    else if (ai === 2) { alert("ai chose paper")};
    else if (ai === 3) { alert("ai chose scissors")};
}

function yourMove(x) {
    var move = x;
    alert("Your move is: " + move);
    
}


function move(x) {
    var y = aimove();
    if (x>y) win="me";
    else win="ai";
    var msg = "mina "+x+", ai: "+y+ " win: "+win;
    alert("mina "+x+", ai: "+y+ " win: "+win);
    console.log("mina "+x+", ai: "+y+ " win: "+win);
}

*/