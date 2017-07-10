import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int f0 = 1;
        int f1 = 1;
        for (int i = 0; i < n-1; i++) {
            int fNext = f0 + f1;
            f0 = f1;
            f1 = fNext;
        }

        System.out.println(f1);

    }
}
