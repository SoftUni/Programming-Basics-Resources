result = 0
expressionOperator = "+"
expression = input()
symbols = list(expression)
symbol = symbols.pop(0)

while symbol != "=":
    if symbol == "(":
        innerResult = 0
        innerOperator = '+'
        symbol = symbols.pop(0)

        while symbol != ')':
            if 0 <= ord(symbol) - ord('0') and ord(symbol) - ord('0') <= 9:
                if innerOperator == "+":
                    innerResult += ord(symbol) - ord('0')
                elif innerOperator == "-":
                    innerResult -= ord(symbol) - ord('0')
                elif innerOperator == "*":
                    innerResult *= ord(symbol) - ord('0')
                elif innerOperator == "/":
                    innerResult /= ord(symbol) - ord('0')
            elif symbol == '+' or symbol == '-' or symbol == '/' or symbol == '*':
                innerOperator = symbol

            symbol = symbols.pop(0)

        if expressionOperator == "+":
            result += innerResult
        elif expressionOperator == "-":
            result -= innerResult
        elif expressionOperator == "*":
            result *= innerResult
        elif expressionOperator == "/":
            result /= innerResult

    elif 0 <= ord(symbol) - ord('0') and ord(symbol) - ord('0') <= 9:
        if expressionOperator == "+":
            result += ord(symbol) - ord('0')
        elif expressionOperator == "-":
            result -= ord(symbol) - ord('0')
        elif expressionOperator == "*":
            result *= ord(symbol) - ord('0')
        elif expressionOperator == "/":
            result /= ord(symbol) - ord('0')

    elif (symbol == '+' or
            symbol == '-' or
            symbol == '/' or
            symbol == '*'):
        expressionOperator = symbol

    symbol = symbols.pop(0);

print("%.2f" % (result))