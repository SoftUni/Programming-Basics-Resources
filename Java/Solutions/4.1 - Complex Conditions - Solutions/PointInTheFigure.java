import java.util.Scanner;

public class PointInTheFigure {
    public static void main(String[] args) {

        Scanner console = new Scanner(System.in);

        int h = Integer.parseInt(console.nextLine());
        int x = Integer.parseInt(console.nextLine());
        int y = Integer.parseInt(console.nextLine());

        boolean outRectangle1 = (x<0 || x>3*h) || (y<0 || y>h);
        boolean outRectangle2 = (x<h || x>2*h) || (y<h || y>4*h);

        boolean inRectangle1 = (x>0 && x<3*h) && (y>0 && y<h);
        boolean inRectangle2 = (x>h && x<2*h) && (y>h && y<4*h);

        boolean commonBorder = (x>h && x<2*h) && y==h;

        if (outRectangle1 && outRectangle2) {
            System.out.println("outside");
        } else if (inRectangle1 || inRectangle2 || commonBorder) {
            System.out.println("inside");
        } else {
            System.out.println("border");
        }
    }
}
