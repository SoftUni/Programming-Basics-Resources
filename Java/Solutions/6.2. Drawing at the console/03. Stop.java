import java.util.Scanner;

public class Stop {
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

        int dots = n + 1;

        int underscopes = 2 * n + 1;

        System.out.printf("%s%s%s",
                repeatStr(".", n + 1),
                repeatStr("_", underscopes),
                repeatStr(".", n + 1));
        System.out.println();

        underscopes -= 2;
        dots--;

        for (int i = 0; i < n; i++)
        {
            System.out.printf("%s//%s\\\\%s",
                    repeatStr(".", dots),
                    repeatStr("_", underscopes),
                    repeatStr(".", dots));
            System.out.println();

            underscopes += 2;
            dots--;
        }

        System.out.printf("//%sSTOP!%s\\\\",
                    repeatStr("_", ((underscopes - 5) / 2)),
                    repeatStr("_", ((underscopes - 5) / 2)));
        System.out.println();

        for (int i = 0; i < n; i++){
            System.out.printf("%s\\\\%s//%s",
                    repeatStr(".", i),
                    repeatStr("_", underscopes),
                    repeatStr(".", i));
            System.out.println();
            underscopes -= 2;
        }
    }
}
