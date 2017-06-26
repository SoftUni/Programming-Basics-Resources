import java.util.Scanner;

public class BullsAndCows {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int guessNumber = Integer.parseInt(scanner.nextLine());
        int targetBulls = Integer.parseInt(scanner.nextLine());
        int targetCows = Integer.parseInt(scanner.nextLine());

        boolean solutionFound = false;

        // Check all possible sequences of 4 digits
        for (int digit1 = 1; digit1 <= 9; digit1++) {
            for (int digit2 = 1; digit2 <= 9; digit2++) {
                for (int digit3 = 1; digit3 <= 9; digit3++) {
                    for (int digit4 = 1; digit4 <= 9; digit4++) {
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
                        if (digit1 == guessDigit1) {
                            // Bull at position #1 found -> count it and remove it
                            currentBulls++;
                            guessDigit1 = -1;
                            digit1 = -2;
                        }
                        if (digit2 == guessDigit2) {
                            // Bull at position #2 found -> count it and remove it
                            currentBulls++;
                            guessDigit2 = -1;
                            digit2 = -2;
                        }
                        if (digit3 == guessDigit3) {
                            // Bull at position #3 found -> count it and remove it
                            currentBulls++;
                            guessDigit3 = -1;
                            digit3 = -2;
                        }
                        if (digit4 == guessDigit4) {
                            // Bull at position #4 found -> count it and remove it
                            currentBulls++;
                            guessDigit4 = -1;
                            digit4 = -2;
                        }

                        // Find all cows for digit1, count them and remove them (assign -1)
                        if (digit1 == guessDigit2) {
                            // Cow at position #2 found -> count it and remove it
                            currentCows++;
                            guessDigit2 = -1;
                        } else if (digit1 == guessDigit3) {
                            // Cow at position #3 found -> count it and remove it
                            currentCows++;
                            guessDigit3 = -1;
                        } else if (digit1 == guessDigit4) {
                            // Cow at position #4 found -> count it and remove it
                            currentCows++;
                            guessDigit4 = -1;
                        }

                        // Find all cows for digit2, count them and remove them (assign -1)
                        if (digit2 == guessDigit1) {
                            // Cow at position #1 found -> count it and remove it
                            currentCows++;
                            guessDigit1 = -1;
                        } else if (digit2 == guessDigit3) {
                            // Cow at position #3 found -> count it and remove it
                            currentCows++;
                            guessDigit3 = -1;
                        } else if (digit2 == guessDigit4) {
                            // Cow at position #4 found -> count it and remove it
                            currentCows++;
                            guessDigit4 = -1;
                        }

                        // Find all cows for digit3, count them and remove them (assign -1)
                        if (digit3 == guessDigit1) {
                            // Cows at position #1 found -> count it and remove it
                            currentCows++;
                            guessDigit1 = -1;
                        } else if (digit3 == guessDigit2) {
                            // Cow at position #2 found -> count it and remove it
                            currentCows++;
                            guessDigit2 = -1;
                        } else if (digit3 == guessDigit4) {
                            // Cow at position #4 found -> count it and remove it
                            currentCows++;
                            guessDigit4 = -1;
                        }

                        // Find all cows for digit4, count them and remove them (assign -1)
                        if (digit4 == guessDigit1) {
                            // Cows at position #1 found -> count it and remove it
                            currentCows++;
                            guessDigit1 = -1;
                        } else if (digit4 == guessDigit2) {
                            // Cow at position #2 found -> count it and remove it
                            currentCows++;
                            guessDigit2 = -1;
                        } else if (digit4 == guessDigit3) {
                            // Cow at position #3 found -> count it and remove it
                            currentCows++;
                            guessDigit3 = -1;
                        }

                        digit1 = digitToCheck1;
                        digit2 = digitToCheck2;
                        digit3 = digitToCheck3;
                        digit4 = digitToCheck4;

                        // Print the configuration if the bulls and cows match the target
                        if (currentBulls == targetBulls && currentCows == targetCows) {
                            if (solutionFound) {
                                System.out.print(" ");
                            }
                            System.out.print("" + digit1 + digit2 + digit3 + digit4);
                            solutionFound = true;
                        }
                    }
                }
            }
        }

        if (!solutionFound) {
            System.out.println("No");
        }
    }
}
