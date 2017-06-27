import java.util.Scanner;

public class Cinema {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String projectionType = console.nextLine().toLowerCase();
        int rowsCount = Integer.parseInt(console.nextLine());
        int columnsCount = Integer.parseInt(console.nextLine());

        int fullCapacity = rowsCount * columnsCount;
        double income = 0;

        switch (projectionType) {
            case "premiere":
                income = fullCapacity * 12.00;
                break;
            case "normal":
                income = fullCapacity * 7.50;
                break;
            case "discount" :
                income = fullCapacity*5.00;
                break;
        }
        System.out.printf("%.2f leva", income);
    }
}
