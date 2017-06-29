import java.util.Scanner;

public class ExcellentEvaluationsOrNot {
	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		double evaluation = scanner.nextDouble();

		if (evaluation >= 5.5) {
			System.out.println("Excellent!");
		} else {
			System.out.println("Not excellent.");
		}
	}
}
