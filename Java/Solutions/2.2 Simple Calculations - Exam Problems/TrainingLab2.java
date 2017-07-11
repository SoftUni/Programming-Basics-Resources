import java.util.Scanner;

public class TrainingLab2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double length = Double.parseDouble(scanner.nextLine());
        double width = Double.parseDouble(scanner.nextLine());

        width *= 100;
        length *= 100;

        int cols = (int) ((width - 100) / 70);
        int rows = (int) (length / 120);
        int seats = (rows * cols) - 3;

        System.out.println(seats);
    }
}