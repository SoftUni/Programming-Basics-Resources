import java.util.Scanner;

public class _10_RadiansToDegrees {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double radians = Double.parseDouble(scanner.nextLine());
        long degree = Math.round(radians * 180 / Math.PI);
        System.out.println(degree);
    }
}
