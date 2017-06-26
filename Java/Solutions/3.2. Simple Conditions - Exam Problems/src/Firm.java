import java.util.Scanner;

public class Firm {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int projectHours = Integer.parseInt(scanner.nextLine());
        int availableDays = Integer.parseInt(scanner.nextLine());
        int overtimeWorkers = Integer.parseInt(scanner.nextLine());

        double workDays = availableDays * 0.90;
        double overtime = overtimeWorkers * 2 * availableDays;
        double workHours = Math.floor(workDays * 8 + overtime);

        if (projectHours <= workHours) {
            System.out.printf("Yes!%.0f hours left.",
                    workHours - projectHours);
        } else {
            System.out.printf("Not enough time!%.0f hours needed.",
                    projectHours - workHours);
        }
    }
}
