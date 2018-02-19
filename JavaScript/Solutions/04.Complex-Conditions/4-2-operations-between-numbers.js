function operationsBetweenNumbers([arg1,arg2,arg3]){
	// Read input data
	let N1 = Number(arg1);
	let N2 = Number(arg2);
	let nOperator = arg3;

	// Initialization of the required parameters
	let result = 0.00;
	let output = "";

	// Calculate result
	if (N2 === 0 && (nOperator === "/" || nOperator === "%")) {
		output = "Cannot divide " + N1 + " by zero";
	}
	else if (nOperator === "/")	{
		result = (N1 / N2).toFixed(2);
		output = N1 + " " +  nOperator + " " +  
		N2 + " = " + result;
	} else if (nOperator === "%") {
		result = N1 % N2;
		output = N1 + " " + nOperator + " " + 
		N2 + " = " + result;
	}
	else {
		if (nOperator === "+") {
			result = N1 + N2;
		} else if (nOperator === "-") {
			result = N1 - N2;
		} else if (nOperator === "*") {
			result = N1 * N2;
		}

		output = 
			N1 + " " + nOperator + " " + N2 + 
			" = " + result + " - " + 
			(result % 2 == 0 ? "even" : "odd");
	}
	
	// Output the result
	console.log(output);
}

// operationsBetweenNumbers(["123","12","/"]);
// operationsBetweenNumbers(["10","3","%"]);
// operationsBetweenNumbers(["112","0","/"]);
// operationsBetweenNumbers(["10","0","%"]);
// operationsBetweenNumbers(["10","12","+"]);
// operationsBetweenNumbers(["10","1","-"]);
// operationsBetweenNumbers(["7","3","*"]);
