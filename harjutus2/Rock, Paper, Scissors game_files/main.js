function yourMove(x) {
    var move = x;
    alert("Your move is: " + move);
    
}


function result() {
    var ai = 1;
    alert("ai");
    if (ai === 1) { alert("ai chose rock")};
    else if (ai === 2) { alert("ai chose paper")};
    else if (ai === 3) { alert("ai chose scissors")};
}



function aimove() {
    var x=Math.floor(Math.random()*3)+1;
    return x;
}
            
function move(x) {
    var y = aimove();
    if (x>y) win="me";
    else win="ai";
    var msg = "mina "+x+", ai: "+y+ " win: "+win;
    alert("mina "+x+", ai: "+y+ " win: "+win);
    console.log("mina "+x+", ai: "+y+ " win: "+win);
}