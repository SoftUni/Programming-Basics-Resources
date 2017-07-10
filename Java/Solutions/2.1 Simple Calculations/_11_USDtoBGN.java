import java.util.Scanner;

public class _11_USDtoBGN {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double dollars = Double.parseDouble(scanner.nextLine());

        System.out.printf("%.2f BGN", dollars * 1.79549);
    }
}
