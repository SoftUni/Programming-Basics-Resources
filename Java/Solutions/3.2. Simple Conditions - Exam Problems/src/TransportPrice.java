import java.util.Scanner;

public class TransportPrice {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int distance = Integer.parseInt(scanner.nextLine());
        String dayOrNight = scanner.nextLine();

        double price = 0.0d;

        double taxiRate = 0.0d;

        if (dayOrNight.equals("day")) {
            taxiRate = 0.79;
        } else if (dayOrNight.equals("night")) {
            taxiRate = 0.90;
        }

        if (distance < 20) {
            price = 0.70 + (distance * taxiRate);
        } else if (distance < 100) {
            price = distance * 0.09;
        } else {
            price = distance * 0.06;
        }

        System.out.println(price);
    }
}
