import java.util.Scanner;

public class IncreasingFourNumbers {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int a = Integer.parseInt(scanner.nextLine());
        int b = Integer.parseInt(scanner.nextLine());
        int count = 0;

        for (int i = a; i <= b; i++){
            for (int j = i + 1; j <= b; j++){
                for (int k = j + 1; k <= b; k++) {
                    for (int l = k + 1; l <= b; l++) {
                        System.out.printf("%d %d %d %d%n", i, j, k, l);
                        count++;
                    }
                }
            }
        }

        if (count == 0){
            System.out.print("No");
        }
    }
}
