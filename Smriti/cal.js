let num1 = 4;
let num2 = 5;

document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;

let ans = 0 ;

function add() {
    ans = num1 + num2;
    document.getElementById("result").innerHTML = ans;
}

function sub() {
    ans = num1 - num2;
    document.getElementById("result").innerHTML = ans;
}

function mul() {
    ans = num1 * num2;
    document.getElementById("result").innerHTML = ans;
}

function div() {
    ans = num1 / num2;
    document.getElementById("result").innerHTML = ans;
}