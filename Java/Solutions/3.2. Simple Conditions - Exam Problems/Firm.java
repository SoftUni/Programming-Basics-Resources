import java.text.DecimalFormat;
import java.text.ParseException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws ParseException {
        Scanner scanner = new Scanner(System.in);
        int projectHours = Integer.parseInt(scanner.nextLine());
        int availableDays = Integer.parseInt(scanner.nextLine());
        int workers = Integer.parseInt(scanner.nextLine());

        double workDays = availableDays * 0.90;
        double overtimeHours = workDays * workers * 2;
        double workHours = workDays * workers * 8;
        double totalHours = Math.floor(workHours + overtimeHours);

        if (projectHours <= totalHours) {
            System.out.printf("Yes!%.0f hours left.",
                    totalHours - projectHours);
        } else {
            System.out.printf("Not enough time!%.0f hours needed.",
                    projectHours - totalHours);
        }
    }
}