import java.util.Scanner;

public class Bricks {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int x = Integer.parseInt(scanner.nextLine());
        int w = Integer.parseInt(scanner.nextLine());
        int m = Integer.parseInt(scanner.nextLine());

        int bricksInOneCourse = w * m;

        double totalCourses = Math.ceil((double)x / bricksInOneCourse);

        System.out.print(totalCourses);
    }
}
