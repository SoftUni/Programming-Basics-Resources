package solutions;

import java.util.Scanner;

/**
 * Created by CvetanG on 9.7.2017 г..
 */
public class ElementSumOthers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("n = ");
        int n = scanner.nextInt();
        System.out.println("Enter the numbers:");
        int sum = 0;
        int maxElement = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            int num = scanner.nextInt();
            if (num > maxElement) {
                maxElement = num;
            }

            sum = sum + num;
        }

        if (maxElement == sum - maxElement) {
            System.out.println("Yes, num = " + maxElement);
        } else {
            int difference = sum - maxElement;
            System.out.println("No, diff = " + difference);
        }
    }
}
