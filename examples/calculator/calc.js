// calc.js

// declare global variables
var input_var = document.getElementById('input');
var answer = document.getElementById('answer');

// numeric input
function getNum(num){
    input_var.value += num;
}

// clear screen
function clearScreen(){
    input_var.value = "";
    answer.value = "";
}

// get the mathmatical operation sign
function getOperator(oper){
    switch(oper){
        case "+":
            input_var.value += "+";
            break;
        case "-":
            input_var.value += "-";
            break;
        case "*":
            input_var.value += "*";
            break;
        case "/":
            input_var.value += "/";
            break;
        case "+/-":
            input_var.value += "-" + input_var.value;
    }
}

// backspace/clear last entry
function backspace(){
    var x = input_var.value;

    if(x.length > 0){
        x = x.substring(0, x.length-1); // removes the last character of input
        input_var.value = x;
    }
}

// compute the total
function compute(){
    var ans = Math.floor(+eval(input_var.value));
    answer.value = " = " + ans;
}

//brackets
var i = 0;

function brackets(){
    if(i == 0){
        input_var.value += "(";
        i = 1;
    } else if(i == 1){
        input_var.value += ")";
        i = 0;
    }
}