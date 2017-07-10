import java.util.Scanner;

public class EnterEvenNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = 0;
        while (true) {
            try {
                System.out.print("Enter even number: ");
                n = Integer.parseInt(scanner.nextLine());
                if (n % 2 == 0)
                    break;
                System.out.println("The number is not even.");
            } catch (NumberFormatException ex) {
                System.out.println("Invalid number.");
            }
        }
        System.out.println("Even number entered: " + n);

    }
}
