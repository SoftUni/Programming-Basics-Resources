namespace CrossingSequences
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    
    public class CrossingSequences
    {
        public static void Main(string[] args)
        {
            int tribonacciFirst = int.Parse(Console.ReadLine());
            int tribonacciSecond = int.Parse(Console.ReadLine());
            int tribonacciThird = int.Parse(Console.ReadLine());
            int spiralInitial = int.Parse(Console.ReadLine());
            int spiralStep = int.Parse(Console.ReadLine());

            int tribonacciCurrent = tribonacciFirst;
            int spiralCurrent = spiralInitial;
            int spiralStepMul = 1;
            int spiralIncrement = 0;


            while (tribonacciCurrent <= 1000000 && spiralCurrent <= 1000000)
            {
                if (spiralCurrent == tribonacciCurrent ||
                    spiralCurrent == tribonacciFirst ||
                    spiralCurrent == tribonacciSecond ||
                    spiralCurrent == tribonacciThird)
                {
                    Console.WriteLine(spiralCurrent);
                    return;
                }
                else if (tribonacciCurrent < spiralCurrent)
                {
                    tribonacciCurrent = tribonacciFirst +
                        tribonacciSecond + tribonacciThird;

                    tribonacciFirst = tribonacciSecond;
                    tribonacciSecond = tribonacciThird;
                    tribonacciThird = tribonacciCurrent;
                }
                else
                {
                    if (spiralIncrement == 2)
                    {
                        spiralStepMul++;
                        spiralIncrement = 0;
                    }

                    spiralCurrent += spiralStepMul * spiralStep;

                    spiralIncrement++;
                }
            }

            Console.WriteLine("No");
        }
    }
}
