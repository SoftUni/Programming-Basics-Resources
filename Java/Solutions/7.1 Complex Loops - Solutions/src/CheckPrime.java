import java.util.Scanner;

public class CheckPrime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        boolean prime = (n < 2) ? true : false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                prime = false;
                break;
            }
        }
        if (n < 2) {
            prime = false;
        }
        if (prime) { System.out.println("Prime"); }
        else System.out.println("Not prime");

    }
}
