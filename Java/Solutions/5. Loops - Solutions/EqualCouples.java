package solutions;

import java.util.Scanner;

/**
 * Created by CvetanG on 9.7.2017 г..
 */
public class EqualCouples {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("n = ");
        int n = scanner.nextInt();
        int curSum = 0;
        int privSum = 0;
        int curDiff = 0;
        int maxDiff = Integer.MIN_VALUE;
        System.out.println("Enter left numbers:");
        for (int i = 1; i <= n ; i++) {
            for (int j = 1; j <= 2; j++) {
                curSum += scanner.nextInt();
            }
            if (i > 1) {
                curDiff = Math.abs(curSum - privSum);
                if (curDiff > maxDiff) {
                    maxDiff = curDiff;
                }
            }
            privSum = curSum;
            curSum = 0;
        }


        if (maxDiff == 0) {
            System.out.println("Yes, value = " + curSum);
        } else {
            System.out.println("No, maxDiff = " + maxDiff);
        }
    }
}
