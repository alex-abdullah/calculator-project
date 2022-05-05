// Declaring Variables

let numberCurrent = "";
let currNumberOne;
let currentOperator;
let result;

// Storing display
const display = document.getElementById("display");

// Storing Numbers
const numberButtons = Array.from(
    document.getElementsByClassName("button--number")
);

// Number Function

numberButtons.map((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        numberCurrent += e.target.innerText;
        display.innerText = numberCurrent;
    });
});

// Storing special keys

const specialButtons = Array.from(
    document.getElementsByClassName("button--special")
);

// Special keys function
specialButtons.map((special) => {
    special.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            // Clear
            case "C":
                display.innerText = "";
                break;
            // Clear
            case "ON/AC":
                display.innerText = "";
                numberCurrent = "";
                currNumberOne = "";
                // currNumberTwo = "";
                currentOperator = "";
                result = "";
                break;
            // Backspace
            case "←":
                display.innerText = display.innerText.slice(0, -1);
                break;
        }
    });
});

// Storing operators
const operators = Array.from(
    document.getElementsByClassName("button--operator")
);

// Operators function
operators.map((operator) => {
    operator.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        currNumberOne = numberCurrent;
        currentOperator = e.target.innerText;
        display.innerText = currentOperator;
        numberCurrent = "";
    });
});

// Storing Equals Button
const equal = document.getElementById("equal");

// Equal Button Function
equal.addEventListener("click", (e) => {
    const finalNumberOne = parseFloat(currNumberOne);
    const finalNumberTwo = parseFloat(numberCurrent);

    // Switch based on what operator is pressed
    switch (currentOperator) {
        case "+":
            result = finalNumberOne + finalNumberTwo;
            display.innerText = result;
            break;
        case "-":
            result = finalNumberOne - finalNumberTwo;
            display.innerText = result;
            break;
        case "x":
            result = finalNumberOne * finalNumberTwo;
            display.innerText = result;
            break;
        case "/":
            result = finalNumberOne / finalNumberTwo;
            display.innerText = result;
            break;
        case "÷":
            result = finalNumberOne / finalNumberTwo;
            display.innerText = result;
            break;
    }

    // Store result as new current number
    numberCurrent = result;
});
