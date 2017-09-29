import java.util.Scanner;

public class Harvest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double vineyardArea = Double.parseDouble(scanner.nextLine());
        double grapePerSquare = Double.parseDouble(scanner.nextLine());
        double neededLiters = Double.parseDouble(scanner.nextLine());
        double workers = Double.parseDouble(scanner.nextLine());

        double harvestPerVine = (vineyardArea * grapePerSquare) * 0.4;
        double vine = harvestPerVine / 2.5;

        if (vine >= neededLiters) {
            double vineLeft = vine - neededLiters;
            System.out.printf("Good harvest this year! Total wine: %.0f liters.%n",
                    Math.floor(vine));
            System.out.printf("%.0f liters left -> %.0f liters per person.",
                    Math.ceil(vineLeft), Math.ceil(vineLeft / workers));
        } else {
            System.out.printf("It will be a tough winter! More %.0f liters wine needed.",
                    Math.floor(neededLiters - vine));
        }
    }
}
