package solutions;

import java.util.Scanner;

/**
 * Created by CvetanG on 9.7.2017 г..
 */
public class LowestNum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("n = ");
        int n = scanner.nextInt();
        System.out.println("Enter the numbers:");
        int min = Integer.MAX_VALUE;
        for (int i = 1; i <= n; i++) {
            int num = scanner.nextInt();
            if (num < min) {
                min = num;
            }

        }

        System.out.println("min = " + min);
    }
}
