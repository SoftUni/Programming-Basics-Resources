import java.util.Scanner;

public class IncreasingElements {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int countTempLongest = 0;
        int countLongest = 0;
        int aPrev = 0;
        int a = 0;

        for (int i = 0; i < n; i++){
            a = Integer.parseInt(scanner.nextLine());
            if (a > aPrev){
                countTempLongest++;
            }
            else{
                countTempLongest = 1;
            }

            if (countTempLongest > countLongest){
                countLongest = countTempLongest;
            }
            aPrev = a;
        }
        System.out.print(countLongest);
    }
}
