import java.util.Scanner;

public class SumsStep3 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());

        int sum1 = 0;
        int sum2 = 0;
        int sum3 = 0;

        for (int i = 0; i < n; i++){
            int a = Integer.parseInt(scanner.nextLine());
            if (i % 3 == 0){
                sum1 += a;
            }
            if (i % 3 == 1){
                sum2 += a;
            }
            if (i % 3 == 2){
                sum3 += a;
            }
        }
        System.out.printf("sum1 = %d%n", sum1);
        System.out.printf("sum2 = %d%n", sum2);
        System.out.printf("sum3 = %d%n", sum3);
    }
}
