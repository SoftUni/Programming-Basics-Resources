import java.lang.*;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.Scanner;

public class Trip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // Read input data
        BigDecimal budget = new BigDecimal(scanner.nextLine());
        String season = scanner.nextLine();

        // Initialization of the required parameters
        String destinationResult = "";
        String holidayInformation = "";
        BigDecimal moneySpent = new BigDecimal("0.00");

        DecimalFormat formatter = new DecimalFormat("0.00");
        // Calculate result
        if (budget.compareTo(BigDecimal.valueOf(100.00)) <= 0) {
            destinationResult = "Bulgaria";
            if (season.equals("summer")) {
                moneySpent = BigDecimal.valueOf(0.30).multiply(budget);
                holidayInformation = String.format("Camp - %s", formatter.format(moneySpent));
            } else {
                moneySpent = BigDecimal.valueOf(0.70).multiply(budget);
                holidayInformation = String.format("Hotel - %s", formatter.format(moneySpent));
            }
        } else if (budget.compareTo(BigDecimal.valueOf(1000.00)) <= 0) {
            destinationResult = "Balkans";
            if (season.equals("summer")) {
                moneySpent = BigDecimal.valueOf(0.40).multiply(budget);
                holidayInformation = String.format("Camp - %s", formatter.format(moneySpent));
            } else {
                moneySpent = BigDecimal.valueOf(0.80).multiply(budget);
                holidayInformation = String.format("Hotel - %s", formatter.format(moneySpent));
            }
        } else {
            destinationResult = "Europe";
            moneySpent = BigDecimal.valueOf(0.90).multiply(budget);
            holidayInformation = String.format("Hotel - %s", formatter.format(moneySpent));
        }

        System.out.println(String.format("Somewhere in %s", destinationResult));
        System.out.println(holidayInformation);
    }
}
