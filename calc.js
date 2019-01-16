//The structure of this program has the 5 variables below that will be manipulated based on
//what is happening with the buttons clicks to perform calculations. The variables contain
//a two numbers and an operator, and the 4th and 5th variable are flags that 
//tell the first two variables whether or not a decimal point is in the variable already
// so that it will not accept a second
let firstVariable;
let secondVariable;
let operator;
let hasDecimalOne = false;
let hasDecimalTwo = false;

//We are listening to all click events on the buttons themselves. Each button is setup with
//its own case in the if ... else statement 
let eventHandler = document.querySelector('#all_buttons');

eventHandler.addEventListener('click', doSomething);

//When a button is clicked, it will execute this program. The program looks to see if 
//each variable is undefined in the order firstVariable -> operator -> secondVariable
//The functionality is that of a standard 4 function calculator
function doSomething (e) {
    let clickedItem = e.target.id;
    if (firstVariable === undefined) {
        switch (clickedItem) {
            case 'zero':
                firstVariable = '0';
                break;
            case 'one':
                firstVariable = '1';
                break;
            case 'two':
                firstVariable = '2';
                break;
            case 'three':
                firstVariable = '3';
                break;
            case 'four':
                firstVariable = '4';
                break;
            case 'five':
                firstVariable = '5';
                break;
            case 'six':
                firstVariable = '6';
                break;
            case 'seven':
                firstVariable = '7';
                break;
            case 'eight':
                firstVariable = '8';
                break;
            case 'nine':
                firstVariable = '9';
                break;
            case 'decimal':
                firstVariable = '0.';
                hasDecimalOne = true;
                break;
            case 'divide':
                firstVariable = '0';
                operator = '/';
                break;
            case 'multiply':
                firstVariable = '0';
                operator = '*';
                break;
            case 'subtract':
                firstVariable = '0';
                operator = '-';
                break;
            case 'addition':
                firstVariable = '0';
                operator = '+';
                break;
        };
    } else if (operator === undefined) {
        switch (clickedItem) {
            case 'zero':
                firstVariable = firstVariable + '0';
                break;
            case 'one':
                firstVariable = firstVariable + '1';
                break;
            case 'two':
                firstVariable = firstVariable + '2';
                break;
            case 'three':
                firstVariable = firstVariable + '3';
                break;
            case 'four':
                firstVariable = firstVariable + '4';
                break;
            case 'five':
                firstVariable = firstVariable + '5';
                break;
            case 'six':
                firstVariable = firstVariable + '6';
                break;
            case 'seven':
                firstVariable = firstVariable + '7';
                break;
            case 'eight':
                firstVariable = firstVariable + '8';
                break;
            case 'nine':
                firstVariable = firstVariable + '9';
                break;
            case 'decimal':
                if (hasDecimalOne === false) {
                    firstVariable = firstVariable + '.';
                    hasDecimalOne = true;
                };
                break;
            case 'divide':
                operator = '/';
                break;
            case 'multiply':
                operator = '*';
                break;
            case 'subtract':
                operator = '-';
                break;
            case 'addition':
                operator = '+';
                break;
            case 'clear':
                firstVariable = undefined;
                hasDecimalOne = false;
                break;
        };
    } else if (secondVariable === undefined) {
        switch (clickedItem) {
            case 'zero':
                secondVariable = '0';
                break;
            case 'one':
                secondVariable = '1';
                break;
            case 'two':
                secondVariable = '2';
                break;
            case 'three':
                secondVariable = '3';
                break;
            case 'four':
                secondVariable = '4';
                break;
            case 'five':
                secondVariable = '5';
                break;
            case 'six':
                secondVariable = '6';
                break;
            case 'seven':
                secondVariable = '7';
                break;
            case 'eight':
                secondVariable = '8';
                break;
            case 'nine':
                secondVariable = '9';
                break;
            case 'decimal':
                secondVariable = '0.'
                break;
            case 'divide':
                operator = '/';
                break;
            case 'multiply':
                operator = '*';
                break;
            case 'subtract':
                operator = '-';
                break;
            case 'addition':
                operator = '+';
                break;
            case 'clear':
                firstVariable = undefined;
                operator = undefined;
                hasDecimalOne = false;
                break;
            case 'equal':
            if (operator === '+') {
                let holder = Number(firstVariable) + Number(firstVariable);
                firstVariable = holder.toString();
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
            } else if (operator === '-') {
                let holder = Number(firstVariable) - Number(firstVariable);
                firstVariable = holder.toString();
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
            } else if (operator ==='*') {
                let holder = Number(firstVariable) * Number(firstVariable);
                firstVariable = holder.toString();
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
            } else if (operator === '/') {
                let holder = Number(firstVariable) / Number(firstVariable);
                firstVariable = holder.toString();
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
            } else {
                console.log('something went wrong');
            }
        };
    } else {
        switch (clickedItem) {
            case 'zero':
                secondVariable = secondVariable + '0';
                break;
            case 'one':
                secondVariable = secondVariable + '1';
                break;
            case 'two':
                secondVariable = secondVariable + '2';
                break;
            case 'three':
                secondVariable = secondVariable + '3';
                break;
            case 'four':
                secondVariable = secondVariable + '4';
                break;
            case 'five':
                secondVariable = secondVariable + '5';
                break;
            case 'six':
                secondVariable = secondVariable + '6';
                break;
            case 'seven':
                secondVariable = secondVariable + '7';
                break;
            case 'eight':
                secondVariable = secondVariable + '8';
                break;
            case 'nine':
                secondVariable = secondVariable + '9';
                break;
            case 'decimal':
                if (hasDecimalTwo === false) {
                    secondVariable = secondVariable + '.';
                    hasDecimalTwo = true;
                };
                break;
            case 'divide':
                if (operator === '+') {
                    let holder = Number(firstVariable) + Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else if (operator === '-') {
                    let holder = Number(firstVariable) - Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else if (operator ==='*') {
                    let holder = Number(firstVariable) * Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else if (operator === '/') {
                    let holder = Number(firstVariable) / Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else {
                    console.log('something went wrong');
                };
                operator = '/';
                break;
            case 'multiply':
                if (operator === '+') {
                    let holder = Number(firstVariable) + Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else if (operator === '-') {
                    let holder = Number(firstVariable) - Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else if (operator ==='*') {
                    let holder = Number(firstVariable) * Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else if (operator === '/') {
                    let holder = Number(firstVariable) / Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else {
                    console.log('something went wrong');
                };
                operator = '*';
                break;
            case 'subtract':
                if (operator === '+') {
                    let holder = Number(firstVariable) + Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else if (operator === '-') {
                    let holder = Number(firstVariable) - Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else if (operator ==='*') {
                    let holder = Number(firstVariable) * Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else if (operator === '/') {
                    let holder = Number(firstVariable) / Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else {
                    console.log('something went wrong');
                };
                operator = '-';
                break;
            case 'addition':
                if (operator === '+') {
                    let holder = Number(firstVariable) + Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else if (operator === '-') {
                    let holder = Number(firstVariable) - Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else if (operator ==='*') {
                    let holder = Number(firstVariable) * Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else if (operator === '/') {
                    let holder = Number(firstVariable) / Number(secondVariable);
                    firstVariable = holder.toString();
                    secondVariable = undefined;
                    hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
                } else {
                    console.log('something went wrong');
                };
                operator = '+';
                break;
            case 'clear':
                firstVariable = undefined;
                operator = undefined;
                secondVariable = undefined;
                hasDecimalOne = false;
                hasDecimalTwo = false;
                break;
            case 'equal':
            if (operator === '+') {
                let holder = Number(firstVariable) + Number(secondVariable);
                firstVariable = holder.toString();
                secondVariable = undefined;
                hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
            } else if (operator === '-') {
                let holder = Number(firstVariable) - Number(secondVariable);
                firstVariable = holder.toString();
                secondVariable = undefined;
                hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
            } else if (operator ==='*') {
                let holder = Number(firstVariable) * Number(secondVariable);
                firstVariable = holder.toString();
                secondVariable = undefined;
                hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
            } else if (operator === '/') {
                let holder = Number(firstVariable) / Number(secondVariable);
                firstVariable = holder.toString();
                secondVariable = undefined;
                hasDecimalTwo = false;
                if (Number.isInteger(holder) === true) {
                    hasDecimalOne = false;
                };
            } else {
                console.log('something went wrong');
            };
        };
    };
    //This is the logic in place to put the value of the calculations into the h1 element
    if (firstVariable === undefined) {
        document.getElementById('screen').innerHTML ='0';
      } else if (secondVariable === undefined) {
        document.getElementById('screen').innerHTML = firstVariable;
      } else {
        document.getElementById('screen').innerHTML = secondVariable;
    };
}