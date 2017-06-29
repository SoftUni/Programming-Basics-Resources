import java.util.Scanner;

public class EqualsWords {
	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		String firstWord = scanner.next().toLowerCase();
		String secondWord = scanner.next().toLowerCase();

		if(firstWord.equals(secondWord)) {
			System.out.println("yes");
		} else {
			System.out.println("no");
		}

	}
}
