import java.util.Scanner;

public class PersonalTitles {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        double age = Double.parseDouble(console.nextLine());
        String gender = console.nextLine();

        if (age < 16) {
            if (gender.equals("m")) {
                System.out.println("Master");
            } else if (gender.equals("f")) {
                System.out.println("Miss");
            }
        } else if (age >= 16) {
            if (gender.equals("f")) {
                System.out.println("Ms.");
            } else if (gender.equals("m")) {
                System.out.println("Mr.");
            }
        }
    }
}


