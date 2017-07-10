import java.util.Collections;
import java.util.Scanner;

public class _4_Square {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());

        printHeaderFooter(n);
        //TODO: Draw the rest of the square
        for (int i = 0; i < n-2; i++) {
            printMiddleRow(n);
        }

        printHeaderFooter(n);
    }

    public static void printHeaderFooter(int n){
        System.out.println(new String(new char[2 * n]).replace("\0", "-"));
    }

    public static void printMiddleRow(int n){
        System.out.print("-");
        for (int i = 0; i < n - 1; i++) {
            System.out.print("\\/");
        }
        System.out.println("-");
    }

    public static void printWithCollections(int n){

        System.out.println(String.join("", Collections.nCopies(n, "-")));
    }




}
