import java.util.Scanner;

public class PointInFigure {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int x = Integer.parseInt(scanner.nextLine());
        int y = Integer.parseInt(scanner.nextLine());

        //bool pointInRect1 = x >= 2 && x <= 12 && x >= -3 && y <= 1;
        //bool pointInRect2 = x >= 4 && x <= 10 && y >= -5 && y <= 3;

        if ((x >= 2 && x <= 12 && y >= -3 && y <= 1) || (x >= 4 && x <= 10 && y >= -5 && y <= 3)){
            System.out.print("in");
        }
        else{
            System.out.print("out");
        }
    }
}
