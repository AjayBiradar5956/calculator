const btns = document.querySelectorAll(".items");
const display = document.getElementById("display-area");
var operatorPressed = false;
var operator;
var num1, num2;

function operatorFn() {
    operatorPressed = !operatorPressed;
    num1 = parseFloat(display.textContent);
    display.textContent = "";
}
var result = function (num1, num2, operator) {
    var res = eval(num1 + " " + operator + " " + num2);
    return res;
}

var reset = function () {
    num1 = 0;
    num2 = 0;
    display.textContent = "";
    operatorPressed = false;
}

function calculate(e) {
    var select = e.target.innerText;
    if (select === "*" || select === "%" || select === "/" || select === "+" || select === "-") {
        operatorFn();
        operator = select;
    } else if (select === "AC") {
        reset();
    } else if (select === "+/-") {
        if (num1 === "") {
            num1 = display.textContent;
            display.textContent = num1 * -1;
            num1 = num1 * -1;
        } else {
            num2 = display.textContent;
            display.textContent = num2 * -1;
            num2 = num2 * -1;
        }
    }
    else if (select === "=") {
        num2 = parseFloat(display.textContent);
        var ans = result(num1, num2, operator);
        display.textContent = ans;
    }
    else {
        display.textContent += e.target.innerText;
    }
}

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", calculate);
}
