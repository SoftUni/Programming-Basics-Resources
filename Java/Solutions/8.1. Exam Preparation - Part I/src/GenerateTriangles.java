import java.util.Scanner;

public class GenerateTriangles {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int m = Integer.parseInt(scanner.nextLine());
        int count = 0;
        int volume = 0;

        for (int i = -n; i < n; i++){
            for (int j = -n; j < n; j++){
                for (int k = i + 1; k <= n; k++){
                    for (int l = j + 1; l <= n; l++){
                        volume = Math.abs(k - i) * Math.abs(l - j);
                        if(volume >= m) {
                            System.out.printf("(%d, %d) (%d, %d) -> %d%n",
                                    i, j, k, l, volume);
                            count++;
                        }
                    }
                }
            }
        }

        if (count == 0){
            System.out.print("No");
        }
    }
}
