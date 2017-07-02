import java.lang.*;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.util.Scanner;

public class OperationsBetweenNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Read input data
        int N1 = Integer.parseInt(scanner.nextLine());
        int N2 = Integer.parseInt(scanner.nextLine());
        String nOperator = scanner.nextLine();

        // Initialization of the required parameters
        BigDecimal result = new BigDecimal("0.00");
        String output = "";
        DecimalFormat intFormatter = new DecimalFormat("0");

        if (N2 == 0 && (nOperator.equals("/") || nOperator.equals("%"))) {
            output = String.format("Cannot divide %d by zero", N1);
        } else if (nOperator.equals("/")) {
            result = new BigDecimal(N1).divide(new BigDecimal(N2),2, RoundingMode.HALF_UP);
            DecimalFormat decimalFormatter = new DecimalFormat("0.00");
            output = String.format("%d %s %d = %s", N1, nOperator, N2, decimalFormatter.format(result));
        } else if (nOperator.equals("%")) {
            result = new BigDecimal(N1).remainder(new BigDecimal(N2));
            output = String.format("%d %s %d = %s", N1, nOperator, N2, intFormatter.format(result));
        } else {
            if (nOperator.equals("+")) {
                result = new BigDecimal((N1 + N2));
            } else if (nOperator.equals("-")) {
                result = new BigDecimal((N1 - N2));
            } else if (nOperator.equals("*")) {
                result = new BigDecimal((N1 * N2));
            }

            output = String.format(
                    "%d %s %d = %s - %s",
                    N1,
                    nOperator,
                    N2,
                    intFormatter.format(result),
                    result.intValueExact() % 2 == 0 ? "even" : "odd");
        }

        System.out.println(output);
    }
}