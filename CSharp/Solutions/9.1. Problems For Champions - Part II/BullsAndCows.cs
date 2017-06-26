namespace Task03
{
	using System;
	
    public class Program
    {
        public static void Main()
        {
            int guessNumber = int.Parse(Console.ReadLine());
            int targetBulls = int.Parse(Console.ReadLine());
            int targetCows = int.Parse(Console.ReadLine());

            bool solutionFound = false;

            for (int digit1 = 1; digit1 <= 9; digit1++)
            {
                for (int digit2 = 1; digit2 <= 9; digit2++)
                {
                    for (int digit3 = 1; digit3 <= 9; digit3++)
                    {
                        for (int digit4 = 1; digit4 <= 9; digit4++)
                        {
                            int guessDigit1 = (guessNumber / 1000) % 10;
                            int guessDigit2 = (guessNumber / 100) % 10;
                            int guessDigit3 = (guessNumber / 10) % 10;
                            int guessDigit4 = (guessNumber / 1) % 10;

                            int digitToCheck1 = digit1;
                            int digitToCheck2 = digit2;
                            int digitToCheck3 = digit3;
                            int digitToCheck4 = digit4;

                            int currentBulls = 0;
                            int currentCows = 0;

                            // Find all bulls, count them and remove them (assign -1 and -2)
                            if (digitToCheck1 == guessDigit1)
                            {
                                // Bull at position #1 found -> count it and remove it
                                currentBulls++;
                                guessDigit1 = -1;
                                digitToCheck1 = -2;
                            }

                            if (digitToCheck2 == guessDigit2)
                            {
                                // Bull at position #2 found -> count it and remove it
                                currentBulls++;
                                guessDigit2 = -1;
                                digitToCheck2 = -2;
                            }

                            if (digitToCheck3 == guessDigit3)
                            {
                                // Bull at position #3 found -> count it and remove it
                                currentBulls++;
                                guessDigit3 = -1;
                                digitToCheck3 = -2;
                            }

                            if (digitToCheck4 == guessDigit4)
                            {
                                // Bull at position #4 found -> count it and remove it
                                currentBulls++;
                                guessDigit4 = -1;
                                digitToCheck4 = -2;
                            }

                            // Find all cows for digitToCheck1, count them and remove them (assign -1)
                            if (digitToCheck1 == guessDigit2)
                            {
                                // Cow at position #2 found -> count it and remove it
                                currentCows++;
                                guessDigit2 = -1;
                            }
                            else if (digitToCheck1 == guessDigit3)
                            {
                                // Cow at position #3 found -> count it and remove it
                                currentCows++;
                                guessDigit3 = -1;
                            }
                            else if (digitToCheck1 == guessDigit4)
                            {
                                // Cow at position #4 found -> count it and remove it
                                currentCows++;
                                guessDigit4 = -1;
                            }

                            // Find all cows for d2, count them and remove them (assign -1)
                            if (digitToCheck2 == guessDigit1)
                            {
                                // Cow at position #1 found -> count it and remove it
                                currentCows++;
                                guessDigit1 = -1;
                            }
                            else if (digitToCheck2 == guessDigit3)
                            {
                                // Cow at position #3 found -> count it and remove it
                                currentCows++;
                                guessDigit3 = -1;
                            }
                            else if (digitToCheck2 == guessDigit4)
                            {
                                // Cow at position #4 found -> count it and remove it
                                currentCows++;
                                guessDigit4 = -1;
                            }

                            // Find all cows for d3, count them and remove them (assign -1)
                            if (digitToCheck3 == guessDigit1)
                            {
                                // Cows at position #1 found -> count it and remove it
                                currentCows++;
                                guessDigit1 = -1;
                            }
                            else if (digitToCheck3 == guessDigit2)
                            {
                                // Cow at position #2 found -> count it and remove it
                                currentCows++;
                                guessDigit2 = -1;
                            }
                            else if (digitToCheck3 == guessDigit4)
                            {
                                // Cow at position #4 found -> count it and remove it
                                currentCows++;
                                guessDigit4 = -1;
                            }

                            // Find all cows for d4, count them and remove them (assign -1)
                            if (digitToCheck4 == guessDigit1)
                            {
                                // Cows at position #1 found -> count it and remove it
                                currentCows++;
                                guessDigit1 = -1;
                            }
                            else if (digitToCheck4 == guessDigit2)
                            {
                                // Cow at position #2 found -> count it and remove it
                                currentCows++;
                                guessDigit2 = -1;
                            }
                            else if (digitToCheck4 == guessDigit3)
                            {
                                // Cow at position #3 found -> count it and remove it
                                currentCows++;
                                guessDigit3 = -1;
                            }

                            if (currentBulls == targetBulls && currentCows == targetCows)
                            {
                                if (solutionFound)
                                {
                                    Console.Write(" ");
                                }

                                Console.Write($"{digit1}{digit2}{digit3}{digit4}");
                                solutionFound = true;
                            }
                        }
                    }
                }
            }

            if (!solutionFound)
            {
                Console.WriteLine("No");
            }
        }
    }
}
