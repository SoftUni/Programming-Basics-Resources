import java.util.Scanner;

public class _15_Encription {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numberOfLine = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < numberOfLine; i++) {
            char currentChar = scanner.nextLine().charAt(0);
            System.out.print(encrypt(currentChar));
        }
    }

    public static String encrypt(char letter){
        int asciiNumber = (int) letter;
        int firstNumber = Integer.parseInt(String.valueOf(String.valueOf(asciiNumber).charAt(0)));
        int lastNumber = Integer.parseInt(String.valueOf(String.valueOf(asciiNumber).charAt(String.valueOf(asciiNumber).length()-1)));
        String middlePart = firstNumber + "" + lastNumber;
        String firstPart = String.valueOf(Character.toChars(asciiNumber + lastNumber));
        String secondPart = String.valueOf(Character.toChars(asciiNumber - firstNumber));

        return firstPart + middlePart + secondPart;
    }
}
