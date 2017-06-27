import java.util.Scanner;
import java.util.Scanner;

public class FruitVegetable {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String product = console.nextLine();

        boolean isFruit = product.equals("banana") || product.equals("apple") || product.equals("kiwi")
                || product.equals("cherry") || product.equals("lemon") || product.equals("grapes");
        boolean isVegetable = product.endsWith("tomato") || product.equals("cucumber")
                || product.equals("pepper") || product.equals("carrot");

        if (isFruit) {
            System.out.println("fruit");
        } else if (isVegetable) {
            System.out.println("vegetable");
        } else {
            System.out.println("unknown");
        }
    }
}
