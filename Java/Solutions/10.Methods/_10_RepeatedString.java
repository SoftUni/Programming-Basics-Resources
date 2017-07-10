import java.util.Scanner;

public class _10_RepeatedString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String str = scanner.nextLine();
        int count = Integer.parseInt(scanner.nextLine());

        String resultingString = repeatedString(str, count);
        System.out.println(resultingString);
    }

    public static String repeatedString(String str, int count){
        String repeatedString = "";
        for (int i = 0; i < count; i++) {
            repeatedString = repeatedString + str;
        }
        return repeatedString;
    }
}
