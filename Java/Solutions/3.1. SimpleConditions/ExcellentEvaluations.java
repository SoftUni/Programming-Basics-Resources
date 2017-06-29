import java.util.Scanner;

public class ExcellentEvaluations {
	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		double evaluation = scanner.nextDouble();

		if (evaluation >= 5.5) {
			System.out.println("Excellent!");
		}
	}
}
