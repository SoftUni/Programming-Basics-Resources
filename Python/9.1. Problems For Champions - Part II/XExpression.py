result = 0
expression_operator = "+"
expression = input()
symbols = list(expression)
symbol = symbols.pop(0)

while symbol != "=":
    if symbol == "(":
        inner_result = 0
        inner_operator = '+'
        symbol = symbols.pop(0)

        while symbol != ')':
            if 0 <= ord(symbol) - ord('0') and ord(symbol) - ord('0') <= 9:
                if inner_operator == "+":
                    inner_result += ord(symbol) - ord('0')
                elif inner_operator == "-":
                    inner_result -= ord(symbol) - ord('0')
                elif inner_operator == "*":
                    inner_result *= ord(symbol) - ord('0')
                elif inner_operator == "/":
                    inner_result /= ord(symbol) - ord('0')
            elif symbol == '+' or symbol == '-' or symbol == '/' or symbol == '*':
                inner_operator = symbol

            symbol = symbols.pop(0)

        if expression_operator == "+":
            result += inner_result
        elif expression_operator == "-":
            result -= inner_result
        elif expression_operator == "*":
            result *= inner_result
        elif expression_operator == "/":
            result /= inner_result

    elif 0 <= ord(symbol) - ord('0') and ord(symbol) - ord('0') <= 9:
        if expression_operator == "+":
            result += ord(symbol) - ord('0')
        elif expression_operator == "-":
            result -= ord(symbol) - ord('0')
        elif expression_operator == "*":
            result *= ord(symbol) - ord('0')
        elif expression_operator == "/":
            result /= ord(symbol) - ord('0')

    elif (symbol == '+' or
            symbol == '-' or
            symbol == '/' or
            symbol == '*'):
        expression_operator = symbol

    symbol = symbols.pop(0)

print("%.2f" % result)