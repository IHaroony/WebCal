let currentInput = "0";
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

const display = document.getElementById('display');

// Number buttons click event
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', function() {
        handleNumber(this.getAttribute('data-number'));
    });
});

// Operator buttons click event
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', function() {
        handleOperator(this.getAttribute('data-operator'));
    });
});

// Equals button click event
document.getElementById('equals').addEventListener('click', handleEquals);

// Clear button click event
document.getElementById('clear').addEventListener('click', handleClear);

// Keyboard input support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Check if the key is a number
    if (!isNaN(key)) {
        handleNumber(key);
    }

    // Check if the key is an operator
    if (['+', '-', '*', '/'].includes(key)) {
        handleOperator(key);
    }

    // Handle enter for equals
    if (key === 'Enter') {
        handleEquals();
    }

    // Handle backspace for clearing
    if (key === 'Backspace') {
        handleClear();
    }
});

// Function to handle number input
function handleNumber(number) {
    if (waitingForSecondNumber) {
        currentInput = number;
        waitingForSecondNumber = false;
    } else {
        currentInput = currentInput === "0" ? number : currentInput + number;
    }
    updateDisplay();
}

// Function to handle operator input
function handleOperator(selectedOperator) {
    if (operator && !waitingForSecondNumber) {
        firstNumber = calculate(firstNumber, parseFloat(currentInput), operator);
    } else {
        firstNumber = parseFloat(currentInput);
    }
    operator = selectedOperator;
    waitingForSecondNumber = true;
    currentInput = "";
}

// Function to handle equals (=)
function handleEquals() {
    if (firstNumber !== null && operator) {
        currentInput = calculate(firstNumber, parseFloat(currentInput), operator).toString();
        firstNumber = null;
        operator = null;
        updateDisplay();
    }
}

// Function to handle clearing (C)
function handleClear() {
    currentInput = "0";
    firstNumber = null;
    operator = null;
    updateDisplay();
}

// Function to update the display
function updateDisplay() {
    display.textContent = currentInput;
}

// Function to perform calculation
function calculate(firstNum, secondNum, operator) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return secondNum === 0 ? "Error" : firstNum / secondNum;
        default:
            return secondNum;
    }
}



// const prompt = require('prompt-sync')();
// This code is important as it allows to basically run our code without it wouldnt work //


// console.log("Welcome!"); 
// a greeting  Message
//let repeat = true;
// set the conditions to repeat the code 

//while (repeat) {
// while looping its telling to repeat the program//

//const operator = prompt("Which operator would you like to use (+, -, /, *): ");
// Prompting the user of operator he can use //

//const askForFirstNum = prompt("Please enter your first number: ");
//const firstNumber = Number(askForFirstNum); 
// Asking the user to enter first number /( we set the name askForNumber as our naming variable and use when type second code of line)//

//const askForSecondNum = prompt("Please enter your second number: ");
//const secondNumber = Number(askForSecondNum); 
// Asking the user to enter second number //
//let result;
//  let result to start our calculations that we asked user before //

//if (operator === '+') {
  //  result = firstNumber + secondNumber;
    // This is an addition operator, we do strong equal and second line we use variables in this case were adding them //
//} else if (operator === '-') {
  //  result = firstNumber - secondNumber;
    // This is an minus operator, we do strong equal and in the second line use both our variabnbles for the outcome, minus them//
    
//} else if (operator === '/') {
  //  if (secondNumber === 0) {
        //console.log("Sorry, division by zero is not allowed.");
    //} else {
      //  result = firstNumber / secondNumber;
    // This is an divide operator, we do strong equal and in the second line use both our variabnbles for the outcome, divide them//
    // we cant divide by zero so we input this code to provide anm error message //
 //   }
//} else if (operator === '*') {
  //  result = firstNumber * secondNumber;
     // This is an multiply operator, we do strong equal and in the second line use both our variabnbles for the outcome, multiply them//
//} else {
  //  console.log("Error: Please use a valid operator (+, -, *, /).");
    // if user input a unrecognised operator or anything not in line it will display error message
//}

//if (result !== undefined) {
   // console.log(`${result}`);
    // the code allows to shows the result for all the calculations //
//}

//const response = prompt("Would you like to use the calculator again (yes/no)")
//if (response !== 
    //"yes") {
  //  repeat = false;

    // This code is for our loop so if the user wants to try using calculator again he can //
    // the user can yes/no, it will restart or present the ending//

//})



//console.log("Thanks for using the calculator, farewell")
// ending message for the user //