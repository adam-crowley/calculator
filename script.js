// add
function add(a,b) {
	return a + b;
}

// subtract
function subtract(a,b) {
	return a - b;
}

// multiply
function multiply(a,b) {
	return a * b;
}

// divide
function divide(a,b) {
	return a / b;
}

//take inputs and process
function operate(lastNo, key, nextNo) {
	//if nextNo already has value then process
	if (nextNo != null) {
		switch(key) {
			case '+':
				numberTotal = add(lastNo, nextNo);
				break;
			case '-':
				numberTotal = subtract(lastNo, nextNo);
				break;
			case '×':
				numberTotal = multiply(lastNo, nextNo);
				break;
			case '/':
				numberTotal = divide(lastNo, nextNo);
				break;
		}
		displayNumber(numberTotal);
		lastNo = nextNo;
		nextNo = numberTotal;
	} else {
		return
	}
	
	console.log({lastNo});
	console.log({operator});
	console.log({nextNo});
	console.log({numberTotal});
}

//display number
function displayNumber(number) {
	display.innerText = number;
}

function incrementNumber(number) {
	//add number to display number
		//if operator doesn't have a value add number to lastNo variable
		//otherwise add number add number to nextNo variable
	if (operator === null) {
		lastNo += number;
		lastNo = Number(lastNo);
		displayNumber(lastNo);
	} else {
		if (nextNo === null) {nextNo = 0}
		nextNo += number;
		nextNo = Number(nextNo);
		displayNumber(nextNo);
	}
}

const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator__display-output');
let lastNo = 0;
let operator = null;
let nextNo = null;
let numberTotal = 0;
console.log({lastNo});
console.log({operator});
console.log({nextNo});

//create event listener for all buttons
calculator.addEventListener('click', (event) => {
	if (event.target.classList.contains('calculator__button--number')) {
		const key = event.target.innerText;
		incrementNumber(key);
		console.log({lastNo});
		console.log({operator});
		console.log({nextNo});
		console.log({numberTotal});
	}
	if (event.target.classList.contains('calculator__button--operator')) {
		const key = event.target.innerText;
		operator = key;
		operate(lastNo, operator, nextNo);
		console.log({lastNo});
		console.log({operator});
		console.log({nextNo});
		console.log({numberTotal});
	}
	if (event.target.classList.contains('calculator__button--equal')) {
		operate(lastNo, operator, nextNo);
	}
})



