using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class ExpressionSolution
{
    public static void Main()
    {
		int symbol = Console.Read();
        decimal result = 0;
        int expressioOperator = '+';

        while (symbol != '=')
        {
            if (symbol == '(')
            {
                decimal innerResult = 0;
                int innerOperator = '+';
                symbol = Console.Read();

                while (symbol != ')')
                {
                    if (0 <= symbol - '0' && symbol - '0' <= 9)
                    {
                        switch (innerOperator)
                        {
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
                             symbol == '*')
                    {
                        innerOperator = symbol;
                    }
                    symbol = Console.Read();
                }

                switch (expressioOperator)
                {
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
            else if (0 <= symbol - '0' && symbol - '0' <= 9)
            {
                switch (expressioOperator)
                {
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
                     symbol == '*')
            {
                expressioOperator = symbol;
            }

            symbol = Console.Read();
        }
	
        Console.WriteLine("{0:0.00}", result);
    }
}
