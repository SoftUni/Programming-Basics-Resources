import java.util.Scanner;

public class SimpleCalculations {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);

		System.out.print("a = ");
		int a = in.nextInt();
		int area = a * a;

		System.out.print("Square area = ");
		System.out.println(area);
	}
}
