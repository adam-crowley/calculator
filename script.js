// add
function add(a,b) {
	return a + b;
}

// subtract
function subtract(a,b) {
	// console.log(a - b);
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

function operate(operator, numA, numB) {
	switch(operator) {
		case '+':
			add(numA, numB);
			break;
		case '-':
			subtract(numA, numB);
			break;
		case '*':
			multiply(numA, numB);
			break;
		case '/':
			divide(numA, numB);
			break;
	}
}

operate('?', 5, 1);