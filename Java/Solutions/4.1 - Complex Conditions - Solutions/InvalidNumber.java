import java.util.Scanner;

public class InvalidNumber {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        int number = Integer.parseInt(console.nextLine());

        boolean isInRange = (number >= 100 && number <=200) || number ==0;

        if (!isInRange) {
            System.out.println("invalid");
        }
    }
}
