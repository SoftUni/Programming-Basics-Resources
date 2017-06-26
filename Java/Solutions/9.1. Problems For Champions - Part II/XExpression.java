import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.DecimalFormat;

public class XExpression {

    public static void main(String[] args) throws IOException {
        BufferedReader bufferReader = new BufferedReader(new InputStreamReader(System.in));
        int symbol = bufferReader.read();
        double result = 0;
        int expressionOperator = '+';

        while (symbol != '=') {
            if (symbol == '(') {
                double innerResult = 0;
                int innerOperator = '+';
                symbol = bufferReader.read();

                while (symbol != ')') {
                    if (0 <= symbol - '0' && symbol - '0' <= 9) {
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
                    } else if (symbol == '+' ||
                            symbol == '-' ||
                            symbol == '/' ||
                            symbol == '*') {
                        innerOperator = symbol;
                    }

                    symbol = bufferReader.read();
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
            } else if (0 <= symbol - '0' && symbol - '0' <= 9) {
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
            } else if (symbol == '+' ||
                    symbol == '-' ||
                    symbol == '/' ||
                    symbol == '*') {
                expressionOperator = symbol;
            }
            symbol = bufferReader.read();
        }

        DecimalFormat formatter = new DecimalFormat("0.00");
        System.out.println(formatter.format(result));
    }
}
