import java.lang.*;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.Scanner;

public class HotelRoom {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Read input data
        String month = scanner.nextLine();;
        int nights = Integer.parseInt(scanner.nextLine());

        // Initialization of the required parameters
        BigDecimal studioPrice = new BigDecimal(50.00);
        BigDecimal apartmentPrice = new BigDecimal(65.00);
        BigDecimal studioRent = new BigDecimal(0.00);
        BigDecimal apartmentRent = new BigDecimal(0.00);

        // Calculate studio and apartment rent prices.
        switch (month) {
            case "May":
            case "October":
                studioPrice = new BigDecimal(50.00);
                apartmentPrice = new BigDecimal(65.00);

                studioRent = studioPrice.multiply(new BigDecimal(nights));
                apartmentRent = apartmentPrice.multiply(new BigDecimal(nights));

                if (nights > 14) {
                    studioRent = studioRent.multiply(new BigDecimal(0.70));
                    apartmentRent = apartmentRent.multiply(new BigDecimal(0.90));
                } else if (nights > 7) {
                    studioRent = studioRent.multiply(new BigDecimal(0.95));
                }

                break;
            case "June":
            case "September":
                studioPrice = new BigDecimal(75.20);
                apartmentPrice = new BigDecimal(68.70);

                studioRent = studioPrice.multiply(new BigDecimal(nights));
                apartmentRent = apartmentPrice.multiply(new BigDecimal(nights));

                if (nights > 14) {
                    studioRent = studioRent.multiply(new BigDecimal(0.80));
                    apartmentRent = apartmentRent.multiply(new BigDecimal(0.90));
                }

                break;
            case "July":
            case "August":
                studioPrice = new BigDecimal(76.00);
                apartmentPrice = new BigDecimal(77.00);

                studioRent = studioPrice.multiply(new BigDecimal(nights));
                apartmentRent = apartmentPrice.multiply(new BigDecimal(nights));

                if (nights > 14) {
                    apartmentRent = apartmentRent.multiply(new BigDecimal(0.90));
                }

                break;
            default:
                break;
        }

        DecimalFormat decimalFormatter = new DecimalFormat("0.00");
        String studioInfo = String.format("Studio: %s lv.", decimalFormatter.format(studioRent.setScale(2, BigDecimal.ROUND_HALF_UP)));
        String apartmentInfo = String.format("Apartment: %s lv.", decimalFormatter.format(apartmentRent.setScale(2, BigDecimal.ROUND_HALF_UP)));

        // Display the result
        System.out.println(apartmentInfo);
        System.out.println(studioInfo);
    }
}
