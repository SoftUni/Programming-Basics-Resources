import java.util.Scanner;

public class PoolPipes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int volume = Integer.parseInt(scanner.nextLine());
        int pipe1 = Integer.parseInt(scanner.nextLine());
        int pipe2 = Integer.parseInt(scanner.nextLine());
        double hours = Double.parseDouble(scanner.nextLine());

        double water = (pipe1 * hours) + (pipe2 * hours);

        if (water <= volume) {
            System.out.printf("The pool is %.0f%% full. Pipe 1: %.0f%%. Pipe 2: %.0f%%.",
                    Math.floor(water / volume * 100),
                    Math.floor(pipe1 * hours / water * 100),
                    Math.floor(pipe2 * hours / water * 100));
        } else {
            System.out.printf("For %f hours the pool overflows with %f liters.",
                    hours, water - volume);
        }
    }
}
