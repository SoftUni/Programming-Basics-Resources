import java.util.Scanner;

public class DateAfter5Days {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int d = Integer.parseInt(scanner.nextLine());
        int m = Integer.parseInt(scanner.nextLine());

        int daysInMonth = 31;
        if (m == 2){
            daysInMonth = 28;
        }
        if (m == 4 || m == 6 ||m == 9 || m == 11){
            daysInMonth = 30;
        }

        d += 5;

        if (d > daysInMonth){
            d -= daysInMonth;
            m++;
            if (m > 12){
                m = 1;
            }
        }
        System.out.printf("%d.%02d", d, m);
    }
}
