import java.util.Scanner;

public class SpecialLetters {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String pattern = "abcde";
        boolean printed = false;

        int rangeStart = Integer.parseInt(scanner.nextLine());
        int rangeEnd = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < 5; i++) {
            for (int k = 0; k < 5; k++) {
                for (int j = 0; j < 5; j++) {
                    for (int p = 0; p < 5; p++) {
                        for (int t = 0; t < 5; t++) {
                            String current = "" +
                                    pattern.charAt(i) +
                                    pattern.charAt(k) +
                                    pattern.charAt(j) +
                                    pattern.charAt(p) +
                                    pattern.charAt(t);

                            String unique = "" + current.charAt(0);

                            for (int l = 1; l < current.length(); l++) {
                                if (unique.indexOf(current.charAt(l)) == -1) {
                                    unique += current.charAt(l);
                                }
                            }

                            int sum = 0;
                            for (int l = 0; l < unique.length(); l++) {
                                int add = 0;

                                switch (unique.charAt(l)) {
                                    case 'a':
                                        add = 5;
                                        break;
                                    case 'b':
                                        add = -12;
                                        break;
                                    case 'c':
                                        add = 47;
                                        break;
                                    case 'd':
                                        add = 7;
                                        break;
                                    case 'e':
                                        add = -32;
                                        break;
                                }

                                sum += (l + 1) * add;
                            }

                            if (sum >= rangeStart && sum <= rangeEnd) {
                                System.out.print(current + " ");
                                printed = true;
                            }
                        }
                    }
                }
            }
        }

        if (!printed) {
            System.out.println("No");
        }
    }
}
