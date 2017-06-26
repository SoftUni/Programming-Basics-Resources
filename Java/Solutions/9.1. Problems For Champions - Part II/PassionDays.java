import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.Scanner;

public class PassionDays {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        BigDecimal shoppingMoney = new BigDecimal(scanner.nextLine());

        int purchases = 0;

        String command = scanner.nextLine();

        while (!command.equals("mall.Enter")) {
            command = scanner.nextLine();
        }

        command = scanner.nextLine();

        while (!command.equals("mall.Exit")) {
            for (char action : command.toCharArray()) {

            }

            command = scanner.nextLine();
        }

        DecimalFormat formatter = new DecimalFormat("0.00");

        if (purchases == 0) {
            System.out.printf("No purchases. Money left: %s lv.\n", formatter.format(shoppingMoney));
        } else {
            System.out.printf("%d purchases. Money left: %s lv.\n", purchases, formatter.format(shoppingMoney));
        }
    }
}
