import java.util.Scanner;

public class _9_GetMin {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num1 = Integer.parseInt(scanner.nextLine());
        int num2 = Integer.parseInt(scanner.nextLine());
        int num3 = Integer.parseInt(scanner.nextLine());

        if(getMin(num1, num2) == num1 && getMin(num1, num3) == num1){
            System.out.println(num1);
        }else if(getMin(num1, num2) == num2 && getMin(num2, num3) == num2){
            System.out.println(num2);
        }else {
            System.out.println(num3);
        }
    }

    public static int getMin(int a, int b){
        if(a > b){
            return b;
        }
        return a;
    }
}
