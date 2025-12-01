let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");

let operator1 = null;
let operator2 = null;
let operation = "";

let button_clear = document.getElementById("clear");
let button_delete = document.getElementById("delete");

let button_add = document.getElementById("add");
let button_subtract = document.getElementById("subtract");
let button_multiply = document.getElementById("multiply");
let button_divide = document.getElementById("divide");

let button_equals = document.getElementById("equals");
let button_decimal = document.getElementById("decimal");

let button_0 = document.getElementById("0");
let button_1 = document.getElementById("1");
let button_2 = document.getElementById("2");
let button_3 = document.getElementById("3");
let button_4 = document.getElementById("4");
let button_5 = document.getElementById("5");
let button_6 = document.getElementById("6");
let button_7 = document.getElementById("7");
let button_8 = document.getElementById("8");
let button_9 = document.getElementById("9");

function addOperatorButtonListener(button, opSymbol) {
  button.addEventListener("click", () => {
    if (operation === "" && display.textContent !== "") {
        operation = opSymbol;
        display.textContent += opSymbol;
    }
  });
}

addOperatorButtonListener(button_add, "+");
addOperatorButtonListener(button_subtract, "-");
addOperatorButtonListener(button_multiply, "*");
addOperatorButtonListener(button_divide, "/");

function addNumberButtonListener(button, number) {

  button.addEventListener("click", () => {
    if (display.textContent === "0") {
        display.textContent = number;
    } else {
        display.textContent += number;
    }

    if (operation === "") {
        operator1 = parseFloat(display.textContent);
    } else {
        const parts = display.textContent.split(operation);
        if (parts[1] !== "") {
            operator2 = parseFloat(parts[1]);
        }
    }
  });
}

addNumberButtonListener(button_0, "0");
addNumberButtonListener(button_1, "1");
addNumberButtonListener(button_2, "2");
addNumberButtonListener(button_3, "3");
addNumberButtonListener(button_4, "4");
addNumberButtonListener(button_5, "5");
addNumberButtonListener(button_6, "6");
addNumberButtonListener(button_7, "7");
addNumberButtonListener(button_8, "8");
addNumberButtonListener(button_9, "9");

function fixFloat(num) {
    return parseFloat(num.toFixed(12));
}

function evaluate() {
    if (operator1 !== null && operator2 !== null && operation !== "") {

        let result = 0;
        if (operator2 === 0 && operation === "/") {
            display.textContent = "Error";
            operator1 = null;
            operator2 = null;
            operation = "";
            return;
        }

        switch (operation) {
            case "+": result = operator1 + operator2; break;
            case "-": result = operator1 - operator2; break;
            case "*": result = operator1 * operator2; break;
            case "/": result = operator1 / operator2; break;
        }

        result = fixFloat(result);
        display.textContent = result;
        operator1 = result;
        operator2 = null;
        operation = "";
    }
}

function clearAll() {
    display.textContent = "0";
    operator1 = null;
    operator2 = null;
    operation = "";
}

function deleteLast() {
    if (display.textContent.length <= 1) {
        clearAll();
        return;
    }

    display.textContent = display.textContent.slice(0, -1);

    if (operation !== "" && display.textContent.includes(operation)) {
        const parts = display.textContent.split(operation);
        operator1 = parts[0] ? parseFloat(parts[0]) : null;
        operator2 = parts[1] ? parseFloat(parts[1]) : null;
    } else {
        operation = "";
        operator1 = parseFloat(display.textContent);
        operator2 = null;
    }
}

button_equals.addEventListener("click", evaluate);
button_clear.addEventListener("click", clearAll);    
button_delete.addEventListener("click", deleteLast); 

button_decimal.addEventListener("click", () => {
    if (operation === "") {
        if (!display.textContent.includes(".")) {
            display.textContent += ".";
            operator1 = parseFloat(display.textContent);
        }
    }
    else {
        const parts = display.textContent.split(operation);
        let second = parts[1];

        if (!second.includes(".")) {
            display.textContent += ".";
            operator2 = parseFloat(second + ".");
        }
    }
});
