import java.util.Scanner;

public class EvenOrOdd {
	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		int number = scanner.nextInt();
		boolean isEven = (number % 2 == 0);

		if(isEven) {
			System.out.println("even");
		} else {
			System.out.println("odd");
		}
	}
}
