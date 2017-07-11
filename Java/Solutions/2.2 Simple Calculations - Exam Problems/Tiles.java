import java.util.Scanner;

public class Tiles {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // Ground length
        int n = Integer.parseInt(scanner.nextLine());
        // Tile width
        double w = Double.parseDouble(scanner.nextLine());
        // Tile length
        double h = Double.parseDouble(scanner.nextLine());
        // Bench width
        int a = Integer.parseInt(scanner.nextLine());
        // Bench length
        int b = Integer.parseInt(scanner.nextLine());

        int area = n * n;
        int bench = a * b;
        int areaToRepair = area - bench;

        double tiles = areaToRepair / (w * h);

        double time = tiles * 0.2;

        System.out.println(tiles);
        System.out.println(time);
    }
}
