function solve(expression) {

    let result = 0;
    let index = 0;
    let symbol = expression[index];
    let expressionOperator = '+';

    while (symbol != '=') {

        if (symbol == '(') {
            let innerResult = 0;
            let innerOperator = '+';
            index++;
            symbol = expression[index]; // ++index

            while (symbol != ')') {
                if ('0' <= symbol && symbol <= '9') {
                    switch (innerOperator) {
                        case '+':
                            innerResult += symbol - '0';
                            break;
                        case '-':
                            innerResult -= symbol - '0';
                            break;
                        case '*':
                            innerResult *= symbol - '0';
                            break;
                        case '/':
                            innerResult /= symbol - '0';
                            break;
                    }
                }
                else if (symbol == '+' ||
                            symbol == '-' ||
                            symbol == '/' ||
                            symbol == '*') {
                    innerOperator = symbol;
                }

                index++;
                symbol = expression[index];
            }

            switch (expressionOperator) {
                case '+':
                    result += innerResult;
                    break;
                case '-':
                    result -= innerResult;
                    break;
                case '*':
                    result *= innerResult;
                    break;
                case '/':
                    result /= innerResult;
                    break;
            }
        }
        else if (0 <= symbol - '0' && symbol - '0' <= 9) {
            switch (expressionOperator) {
                case '+':
                    result += symbol - '0';
                    break;
                case '-':
                    result -= symbol - '0';
                    break;
                case '*':
                    result *= symbol - '0';
                    break;
                case '/':
                    result /= symbol - '0';
                    break;
            }
        }
        else if (symbol == '+' ||
                    symbol == '-' ||
                    symbol == '/' ||
                    symbol == '*') {
            expressionOperator = symbol;
        }

        index++;
        symbol = expression[index];
    }

    console.log(result.toFixed(2));
}

solve('4+6/5+(4*9-8)/7*2='); // 8.57
solve('3+(6/5)+(2*3/7)*7/2*(9/4+4*1)='); // 110.63