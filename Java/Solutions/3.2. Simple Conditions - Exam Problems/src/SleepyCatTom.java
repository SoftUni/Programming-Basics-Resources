import java.util.Scanner;

public class SleepyCatTom {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int holidays = Integer.parseInt(scanner.nextLine());

        int workingDays = 365 - holidays;

        int totalPlayMinutes = holidays * 127 + workingDays * 63;

        double difference = Math.abs(totalPlayMinutes - 30000);
        double hours = difference / 60;
        double minutes = difference % 60;

        if (totalPlayMinutes > 30000) {
            System.out.println("Tom will run away");
            System.out.printf("%.0f hours and %.0f minutes more for play",
                    Math.floor(hours), Math.floor(minutes));
        } else {
            System.out.println("Tom sleeps well");
            System.out.printf("%.0f hours and %.0f minutes less for play",
                    Math.floor(hours), Math.floor(minutes));
        }
    }
}