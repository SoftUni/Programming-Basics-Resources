import java.util.Scanner;

public class FruitShop {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String fruit = console.nextLine().toLowerCase();
        String day = console.nextLine().toLowerCase();
        double quantity = Double.parseDouble(console.nextLine());

        double price = -1;

        if (day.equals("monday") || day.equals("tuesday") || day.equals("wednesday") || day.equals("thursday") ||
                day.equals("friday")) {

            if (fruit.equals("banana")) {
                price = quantity * 2.50;

            } else if (fruit.equals("apple")) {
                price = quantity * 1.20;

            } else if (fruit.equals("orange")) {
                price = quantity * 0.85;

            } else if (fruit.equals("grapefruit")) {
                price = quantity * 1.45;

            } else if (fruit.equals("kiwi")) {
                price = quantity * 2.70;

            } else if (fruit.equals("pineapple")) {
                price = quantity * 5.50;

            } else if (fruit.equals("grapes")) {
                price = quantity * 3.85;
            }
        } else if (day.equals("saturday") || day.equals("sunday")) {

            if (fruit.equals("banana")) {
                price = quantity * 2.70;
            } else if (fruit.equals("apple")) {
                price = quantity * 1.25;
            } else if (fruit.equals("orange")) {
                price = quantity * 0.90;
            } else if (fruit.equals("grapefruit")) {
                price = quantity * 1.60;
            } else if (fruit.equals("kiwi")) {
                price = quantity * 3.00;
            } else if (fruit.equals("pineapple")) {
                price = quantity * 5.60;
            } else if (fruit.equals("grapes")) {
                price = quantity * 4.20;
            }
        }
        if (price >= 0) {
            System.out.println(price);
        } else {
            System.out.println("error");
        }
    }
}

