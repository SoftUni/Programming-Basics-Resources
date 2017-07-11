import java.util.Scanner;

public class VegetableMarket {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        double vegPrice = Double.parseDouble(scanner.nextLine());
        double fruitsPrice = Double.parseDouble(scanner.nextLine());
        int vegPerKg = Integer.parseInt(scanner.nextLine());
        int fruitsPerKg = Integer.parseInt(scanner.nextLine());

        double vegTotal = vegPrice * vegPerKg;
        double fruitTotal = fruitsPrice * fruitsPerKg;

        System.out.println((fruitTotal + vegTotal) / 1.94);
    }
}
