import java.util.Scanner;

public class _2_SignIntegerNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        printSign(n);
    }

    public static void printSign(int n){
        if(n == 0){
            System.out.println("The number 0 is zero.");
        }else if(n > 0){
            System.out.println("The number " + n +" is positive.");
        }else {
            System.out.println("The number " + n +" is negative.");
        }
    }
}
