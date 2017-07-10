import java.util.Scanner;

public class _1_SquareArea {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("a = ");
        int a = Integer.parseInt(scanner.nextLine());
        int area = a * a;
        System.out.print("Square = ");
        System.out.println(area);
    }
}
