import java.util.Scanner;

public class InLargeNumber {
	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		int firstNumber = scanner.nextInt();
		int secondNumber = scanner.nextInt();

		if(firstNumber > secondNumber) {
			System.out.println(firstNumber);
		} else {
			System.out.println(secondNumber);
		}

	}
}
