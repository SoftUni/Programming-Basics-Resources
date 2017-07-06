import java.util.Scanner;

public class Arrow {
    static String repeatStr(String strToRepeat, int count){
        String text = "";
        for (int i = 0; i < count; i++) {
            text = text + strToRepeat;
        }
        return text;
    }

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());

        int outerDots = (n - 1) / 2;
        int innerDots = n - 2;

        System.out.printf("%s%s%s",
                repeatStr(".", outerDots),
                repeatStr("#", n),
                repeatStr(".", outerDots));
        System.out.println();

        for (int i = 0; i < n - 2; i++){
            System.out.printf("%s#%s#%s",
                    repeatStr(".", outerDots),
                    repeatStr(".", innerDots),
                    repeatStr(".", outerDots));
            System.out.println();
        }

        System.out.printf("%s#%s#%s",
                repeatStr("#", outerDots),
                repeatStr(".", innerDots),
                repeatStr("#", outerDots));
        System.out.println();

        outerDots = 1;
        innerDots = 2 * n - 5;

        for (int i = 0; i < n - 2; i++){
            System.out.printf("%s#%s#%s",
                    repeatStr(".", outerDots),
                    repeatStr(".", innerDots),
                    repeatStr(".", outerDots));
            System.out.println();

            outerDots++;
            innerDots -= 2;
        }

        System.out.printf("%s#%s",
                repeatStr(".", outerDots),
                repeatStr(".", outerDots));
        System.out.println();
    }
}
