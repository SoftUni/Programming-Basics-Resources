import java.text.DecimalFormat;
import java.util.Scanner;

public class _6_CalculatePower {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        DecimalFormat format = new DecimalFormat("#.#########");
        double num = Double.parseDouble(scanner.nextLine());
        double power = Double.parseDouble(scanner.nextLine());
        System.out.println(format.format(calculatePower(num,power)));

    }

    public static double calculatePower(double number, double power){
        double result = 0.0;
        result = Math.pow(number, power);
        return result;
    }
}



