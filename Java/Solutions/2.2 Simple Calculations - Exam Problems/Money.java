import java.util.Scanner;

public class Money {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int bitcoins = Integer.parseInt(scanner.nextLine());
        double yuans = Double.parseDouble(scanner.nextLine());
        double commission = Double.parseDouble(scanner.nextLine()) / 100;

        double bitcoinsToLeva = bitcoins * 1168;
        double yuansToDollars = yuans * 0.15d;
        double dollarsToLeva = yuansToDollars * 1.76d;

        double leva = dollarsToLeva + bitcoinsToLeva;
        double euro = leva / 1.95d;

        euro -= commission * euro;
        System.out.println(euro);


    }
}
