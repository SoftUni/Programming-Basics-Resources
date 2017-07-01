namespace OperationsBetweenNumbers
{
    using System;

    public static class OperationsBetweenNumbers
    {
        public static void Main()
        {
            // Read input data
            decimal N1 = decimal.Parse(Console.ReadLine());
            decimal N2 = decimal.Parse(Console.ReadLine());
            string nOperator = Console.ReadLine();

            // Initialization of the required parameters
            decimal result = 0.00M;
            string output = string.Empty;

            if (N2 == 0 && (nOperator.Equals("/") || nOperator.Equals("%")))
            {
                output = string.Format("Cannot divide {0} by zero", N1);
            }
            else
            {
                if (nOperator.Equals("+"))
                {
                    result = N1 + N2;
                }
                else if (nOperator.Equals("-"))
                {
                    result = N1 - N2;
                }
                else if (nOperator.Equals("*"))
                {
                    result = N1 * N2;
                }

                output = string.Format(
                    "{0} {1} {2} = {3} - {4}",
                    N1,
                    nOperator,
                    N2,
                    result,
                    result % 2 == 0 ? "even" : "odd");

                if (nOperator.Equals("/"))
                {
                    result = N1 / N2;
                    output = string.Format("{0} {1} {2} = {3:F2}", N1, nOperator, N2, result);
                }
                else if (nOperator.Equals("%"))
                {
                    result = N1 % N2;
                    output = string.Format("{0} {1} {2} = {3}", N1, nOperator, N2, result);
                }
            }

            Console.WriteLine(output);
        }
    }
}
