package solutions;

import java.util.Scanner;

/**
 * Created by CvetanG on 9.7.2017 г..
 */
public class LeftRightSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("n = ");
        int n = scanner.nextInt();
        int leftSum = 0;
        int rightSum = 0;
        System.out.println("Enter left numbers:");
        for (int i = 1; i <= n; i++) {
            leftSum = leftSum + scanner.nextInt();
        }

        System.out.println("Enter right numbers:");
        for (int i = 1; i <= n; i++) {
            rightSum = rightSum + scanner.nextInt();
        }

        if (leftSum == rightSum) {
            System.out.println("Yes, sum = " + leftSum);
        } else {
            int difference = Math.abs(leftSum - rightSum);
            System.out.println("No, diff = " + difference);
        }
    }
}
