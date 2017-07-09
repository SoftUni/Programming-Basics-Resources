package solutions;

import java.util.Scanner;

/**
 * Created by CvetanG on 9.7.2017 г..
 */
public class EvenOddElement {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("n = ");
        int n = scanner.nextInt();
        System.out.println("Enter the numbers:");
        int evenSum = 0;
        int evenMin = Integer.MAX_VALUE;
        int evenMax = Integer.MIN_VALUE;
        int oddSum = 0;
        int oddMin = Integer.MAX_VALUE;
        int oddMax = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            int element = scanner.nextInt();
            if (i % 2 == 0) {
                evenSum += element;
                if (element > evenMax) {
                    evenMax = element;
                }
                if (element < evenMin) {
                    evenMin = element;
                }
            } else {
                oddSum += element;
                if (element > oddMax) {
                    oddMax = element;
                }
                if (element < oddMin) {
                    oddMin = element;
                }
            }
        }

        String evenMaxStr  = evenMax != Integer.MIN_VALUE ? Integer.toString(evenMax) : "No";
        String evenMinStr  = evenMin != Integer.MAX_VALUE ? Integer.toString(evenMin) : "No";
        String oddMaxStr  = oddMax != Integer.MIN_VALUE ? Integer.toString(oddMax) : "No";
        String oddMinStr  = oddMin != Integer.MAX_VALUE ? Integer.toString(oddMin) : "No";

        System.out.println("evenSum =" + evenSum);
        System.out.println("evenMax = " + evenMaxStr);
        System.out.println("evenMin = " + evenMinStr);
        System.out.println("oddSum = " + oddSum);
        System.out.println("oddMax = " + oddMaxStr);
        System.out.println("oddMin = " + oddMinStr);
    }
}
