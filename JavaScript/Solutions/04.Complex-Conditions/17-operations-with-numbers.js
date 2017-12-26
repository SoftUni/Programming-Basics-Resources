function operationsWithNumbers([arg1,arg2,arg3]){
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let operator = arg3;

    let result = 0;

    switch(operator){
        case "+": 
            result = num1 + num2;
            console.log(`${num1} + ${num2} = ${result} - ${result % 2 == 0 ? "even" : "odd"}`);
            break;
        case "-":
            result = num1 - num2;
            console.log(`${num1} - ${num2} = ${result} - ${result % 2 == 0 ? "even" : "odd"}`);
            break;
        case "*":
            result = num1 * num2;
            console.log(`${num1} * ${num2} = ${result} - ${result % 2 == 0 ? "even" : "odd"}`);
            break;
        case "/":
            result = (num1 / num2).toFixed(2);
            if (num2 == 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                console.log(`${num1} / ${num2} = ${result}`);
            }
            break;
        case "%":
            result = num1 % num2;
            if(num2 != 0){
                console.log(`${num1} % ${num2} = ${result}`);
            } else {
                console.log(`Cannot divide ${num1} by zero`);
            }
            break;
    }
}

operationsWithNumbers(["10","12","+"]);
operationsWithNumbers(["10","1","-"]);
operationsWithNumbers(["7","3","*"]);
operationsWithNumbers(["123","12","/"]);
operationsWithNumbers(["10","3","%"]);
operationsWithNumbers(["112","0","/"]);
operationsWithNumbers(["10","0","%"]);