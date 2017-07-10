import java.util.Scanner;

public class EvenPowersOfTwo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int num = 1;
        for (int i = 0; i <= n; i += 2) {
            System.out.println(num);
            num = num * 2 * 2;
        }

    }
}
