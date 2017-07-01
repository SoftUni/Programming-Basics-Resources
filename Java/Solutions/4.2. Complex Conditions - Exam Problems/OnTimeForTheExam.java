import java.lang.*;
import java.util.Scanner;

public class OnTimeForTheExam {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // Set some constants.
        String late = "Late";
        String onTime = "On time";
        String early = "Early";

        // Read the input.
        int examHours = Integer.parseInt(scanner.nextLine());
        int examMinutes = Integer.parseInt(scanner.nextLine());
        int arrivalHours = Integer.parseInt(scanner.nextLine());
        int arrivalMinutes = Integer.parseInt(scanner.nextLine());

        // Calculate all differences in minutes.
        int examTime = (examHours * 60) + examMinutes;
        int arrivalTime = (arrivalHours * 60) + arrivalMinutes;
        int totalMinutesDifference = arrivalTime - examTime;

        // Check when the student had arrived for the exam and display the result
        String studentArrival = late;
        if (totalMinutesDifference < -30) {
            studentArrival = early;
        } else if (totalMinutesDifference <= 0) {
            studentArrival = onTime;
        }

        // Check and output final result.
        String result = "";
        if (totalMinutesDifference != 0) {
            int hoursDifference = Math.abs(totalMinutesDifference / 60);
            int minutesDifference = Math.abs(totalMinutesDifference % 60);

            if (hoursDifference > 0) {
                result = String.format("%d:%02d hours", hoursDifference, minutesDifference);
            } else {
                result = minutesDifference + " minutes";
            }

            if (totalMinutesDifference < 0) {
                result += " before the start";
            } else {
                result += " after the start";
            }
        }

        System.out.println(studentArrival);
        if (!result.isEmpty()) {
            System.out.println(result);
        }
    }
}