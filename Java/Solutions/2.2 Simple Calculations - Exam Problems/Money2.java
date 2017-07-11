import java.util.Scanner;

public class Money2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int bitcoins = Integer.parseInt(scanner.nextLine());
        double yuans = Double.parseDouble(scanner.nextLine());
        double commission = Double.parseDouble(scanner.nextLine()) / 100;

        double euro = (bitcoins * 1168 + yuans * 0.15 * 1.76) / 1.95
                - ((bitcoins * 1168 + yuans * 0.15 * 1.76) / 1.95 * commission);

        euro -= commission * euro;
        System.out.println(euro);


    }
}
