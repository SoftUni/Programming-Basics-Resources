import java.util.Scanner;

public class CrossingSequences {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int tribonacciFirst = Integer.parseInt(scanner.nextLine());
        int tribonacciSecond = Integer.parseInt(scanner.nextLine());
        int tribonacciThird = Integer.parseInt(scanner.nextLine());
        int spiralInitial = Integer.parseInt(scanner.nextLine());
        int spiralStep = Integer.parseInt(scanner.nextLine());

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
                System.out.println(spiralCurrent);
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

        System.out.println("No");
    }
}
