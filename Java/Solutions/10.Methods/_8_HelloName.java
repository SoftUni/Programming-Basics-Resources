import java.util.Scanner;

public class _8_HelloName {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();

        printName(name);
    }

    public static void printName(String name){
        System.out.println("Hello, " + name + "!");
    }
}
