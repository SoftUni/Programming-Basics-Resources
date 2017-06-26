import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

public class MagicDates {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int startYear = Integer.parseInt(scanner.nextLine());
        int endYear = Integer.parseInt(scanner.nextLine());
        int magicWeight = Integer.parseInt(scanner.nextLine());

        LocalDate currentDate = LocalDate.of(startYear, 1, 1);

        boolean printed = false;
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("ddMMyyyy");
        DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

        while (currentDate.getYear() <= endYear) {
            int dateWeight = 0;
            String dateString = formatter.format(currentDate);

            for (int i = 0; i < dateString.length() - 1; i++) {
                for (int j = i + 1; j < dateString.length(); j++) {
                    dateWeight += (dateString.charAt(i) - '0') * (dateString.charAt(j) - '0');
                }
            }

            if (dateWeight == magicWeight) {
                System.out.println(outputFormatter.format(currentDate));
                printed = true;
            }

            currentDate = currentDate.plusDays(1);
        }

        if (!printed) {
            System.out.println("No");
        }
    }
}
