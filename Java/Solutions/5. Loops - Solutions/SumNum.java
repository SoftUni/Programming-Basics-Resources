package solutions;

import java.util.Scanner;

/**
 * Created by CvetanG on 9.7.2017 г..
 */
public class SumNum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("n = ");
        int n = scanner.nextInt();
        System.out.println("Enter the numbers:");
        int sum = 0;
        for (int i = 0; i < n; i++) {
            int num = scanner.nextInt();
            sum = sum + num;
        }

        System.out.println("sum = " + sum);
    }
}
