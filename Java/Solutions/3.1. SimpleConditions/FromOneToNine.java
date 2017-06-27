import java.util.Scanner;

public class FromOneToNine {
	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		int number = scanner.nextInt();

		if (number == 1) {
			System.out.printf("One");
		} else if (number == 2) {
			System.out.printf("Two");
		} else if (number == 3) {
			System.out.printf("Three");
		} else if (number == 4) {
			System.out.printf("Four");
		} else if (number == 5) {
			System.out.printf("Five");
		} else if (number == 6) {
			System.out.printf("Six");
		} else if (number == 7) {
			System.out.printf("Seven");
		} else if (number == 8) {
			System.out.printf("Eight");
		} else if (number == 9) {
			System.out.printf("Nine");
		} else {
			System.out.printf("number too big");
		}

	}
}
