package solutions;

import java.util.Scanner;

/**
 * Created by CvetanG on 9.7.2017 г..
 */
public class EvenOddSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("n = ");
        int n = scanner.nextInt();
        System.out.println("Enter the numbers:");
        int evenSum = 0;
        int oddSum = 0;
        for (int i = 0; i < n; i++) {
            int element = scanner.nextInt();
            if (i % 2 == 0) {
                evenSum += element;
            } else {
                oddSum += element;
            }
        }

        if (evenSum == oddSum) {
            System.out.println("Yes, sum = " + evenSum);
        } else {
            int difference = Math.abs(evenSum - oddSum);
            System.out.println("No, diff = " + difference);
        }


    }
}
