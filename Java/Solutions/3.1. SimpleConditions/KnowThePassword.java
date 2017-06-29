import java.util.Scanner;

public class KnowThePassword {
	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		String defaultPassword = "s3cr3t!P@ssw0rd";
		String password = scanner.next().trim();

		if (defaultPassword.equals(password)) {
			System.out.println("Welcome");
		} else {
			System.out.println("Wrong password!");
		}
	}
}
