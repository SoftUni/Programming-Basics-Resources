import java.util.Scanner;

public class AnimalType {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String animal = console.nextLine();

        switch (animal) {
            case "dog":
                System.out.println("mammal");
                break;
            case "crocodile":
            case "tortoise":
            case "snake":
                System.out.println("reptile");
            default:
                System.out.println("unknown");
        }
    }
}
