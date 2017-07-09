package solutions;

/**
 * Created by CvetanG on 9.7.2017 г..
 */
public class PrintNum1000ends7 {
    public static void main(String[] args) {

        for (int i = 1; i < 1000; i++) {
            if (i % 10 == 7) {
                System.out.println(i);
            }

        }

    }
}
