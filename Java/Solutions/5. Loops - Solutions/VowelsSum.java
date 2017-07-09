package solutions;

import java.util.Scanner;

/**
 * Created by CvetanG on 9.7.2017 г..
 */
public class VowelsSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a word:  ");
        String s = scanner.nextLine();
        int sum = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == 'a') {
                sum += 1;
            } else if (s.charAt(i) == 'e') {
                sum += 2;
            } else if (s.charAt(i) == 'i') {
                sum += 3;
            } else if (s.charAt(i) == 'o') {
                sum += 4;
            } else if (s.charAt(i) == 'u') {
                sum += 5;
            }

        }

        System.out.println("Vowels sum = " + sum);
    }
}
