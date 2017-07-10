import java.util.Scanner;

public class _12_IntegerToBase {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = Integer.parseInt(scanner.nextLine());
        int toBase = Integer.parseInt(scanner.nextLine());

        System.out.println(integerToBase(number, toBase));
    }

    public static String integerToBase(int number, int newBase){
        String result = "";
        while(number > 1){
            result = String.valueOf(number % newBase) + result;
            number = number/newBase;
        }

        return number + result;
    }




}
