import java.text.DecimalFormat;
import java.util.Scanner;

public class _7_2DRectangleArea {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        DecimalFormat decimalFormat = new DecimalFormat("#.#########");

        double x1 = Double.parseDouble(scanner.nextLine());
        double y1 = Double.parseDouble(scanner.nextLine());
        double x2 = Double.parseDouble(scanner.nextLine());
        double y2 = Double.parseDouble(scanner.nextLine());

        // Изчисляване страните на правоъгълника:
        double width = Math.max(x1, x2) - Math.min(x1, x2);
        double height = Math.max(y1, y2) - Math.min(y1, y2);


        System.out.println(decimalFormat.format(width * height));
        System.out.println(decimalFormat.format(2 * (width + height)));
    }
}
