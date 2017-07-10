import java.util.Scanner;

public class Sequence2kPlus1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int k = 1;
        while (k <= n) {
            System.out.println(k);
            k = 2 * k + 1;
        }

    }
}
