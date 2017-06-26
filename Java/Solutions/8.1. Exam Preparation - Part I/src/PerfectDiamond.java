import java.util.Scanner;

public class PerfectDiamond {
    static String repeatStr(String strToRepeat, int count){
        String text = "";
        for(int i = 0; i < count; i++){
            text = text + strToRepeat;
        }
        return text;
    }
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());

        for (int i = 1; i <= n; i++){
            System.out.print(repeatStr(" ", n - i));
            System.out.print("*");
            for (int j = 0; j < i - 1; j++){
                System.out.print("-*");
            }
            System.out.println();
        }

        for (int i = n - 1; i >= 1; i--){
            System.out.print(repeatStr(" ", n - i));
            System.out.print("*");
            for (int j = 1; j < i; j++){
                System.out.print("-*");
            }
            System.out.println();
        }
    }
}
