// add
function add(a,b) {
	console.log('add');
	return a + b;
}

// subtract
function subtract(a,b) {
	console.log('subtract');
	return a - b;
}

// multiply
function multiply(a,b) {
	console.log('times');
	return a * b;
}

// divide
function divide(a,b) {
	console.log('divide');
	return a / b;
}

//take inputs and process
function operate(num1, key, num2) {
	switch(key) {
		case '+':
			result = add(num1, num2);
			break;
		case '−':
			result = subtract(num1, num2);
			break;
		case '×':
			result = multiply(num1, num2);
			break;
		case '÷':
			result = divide(num1, num2);
			break;
	}
	firstNo = result;
	secondNo = null;
	displayNumber(result);
	console.log({firstNo});
	console.log({operator});
	console.log({secondNo});
	console.log({result});
}

//display number
function displayNumber(number) {
	display.innerText = number;
}

function clearCalculator() {
	displayNo = null;
	firstNo = null;
	operator = null;
	secondNo = null;
	result = 0;
	firstValue = true;
	secondValue = false;
	display.innerText = 0;
}

function incrementNumber(number) {
	if (firstValue === true) {
		if (firstNo === null) { firstNo = '' }
		firstNo += number;
		firstNo = Number(firstNo);
		displayNumber(firstNo);
	} else {
		if (secondNo === null) { secondNo = '' }
		secondNo += number;
		secondNo = Number(secondNo);
		displayNumber(secondNo);
		secondValue = true;
	}
	console.log({firstNo});
	console.log({operator});
	console.log({secondNo});
	console.log({result});
}

const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator__display-output');
let displayNo = null;
let firstNo = null;
let operator = null;
let secondNo = null;
let result = 0;
let firstValue = true;
let secondValue = false;

console.log({firstNo});
console.log({operator});
console.log({secondNo});
console.log({result});

//create event listener for all buttons
calculator.addEventListener('click', (event) => {
	if (event.target.classList.contains('calculator__button--number')) {
		let key = event.target.innerText;
		incrementNumber(key);
	}
	if (event.target.classList.contains('calculator__button--operator')) {
		let key = event.target.innerText;
		if (firstValue === true) {
			operator = key;
			firstValue = false;
		}
		if (secondValue === true) {
			operate(firstNo, operator, secondNo);
			operator = key;
		}
		console.log({firstNo});
		console.log({operator});
		console.log({secondNo});
		console.log({result});
		// operate(firstNo, operator, secondNo);
	}
	if (event.target.classList.contains('calculator__button--equal')) {
		operate(firstNo, operator, secondNo);
		// operator = key;
	}
	if (event.target.classList.contains('calculator__button--clear')) {
		clearCalculator();
	}
})


