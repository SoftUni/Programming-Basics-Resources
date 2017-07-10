import java.util.Scanner;

public class _8_TriangleArea {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double side = Double.parseDouble(scanner.nextLine());
        double height = Double.parseDouble(scanner.nextLine());

        System.out.printf("Triangle area = %.2f", side * height / 2);
    }
}
