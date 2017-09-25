import java.util.Scanner;

public class MetricConverter {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		double size = scanner.nextDouble();
		String sourceMetric = scanner.next().toLowerCase();
		String destinationMetric = scanner.next().toLowerCase();

		if (sourceMetric.equals("km")) {
			size = size / 0.001;
		}

		if (sourceMetric.equals("mm")) {
			size = size / 1000;
		}

		if (sourceMetric.equals("cm")) {
			size = size / 100;
		}

		if (sourceMetric.equals("mi")) {
			size = size / 0.000621371192;
		}

		if (sourceMetric.equals("in")) {
			size = size / 39.3700787;
		}

		if (sourceMetric.equals("ft")) {
			size = size / 3.2808399;
		}

		if (sourceMetric.equals("yd")) {
			size = size / 1.0936133;
		}

		if (destinationMetric.equals("km")) {
			size = size * 0.001;
		}

		if (destinationMetric.equals("mm")) {
			size = size * 1000;
		}

		if (destinationMetric.equals("cm")) {
			size = size * 100;
		}

		if (destinationMetric.equals("mi")) {
			size = size * 0.000621371192;
		}

		if (destinationMetric.equals("in")) {
			size = size * 39.3700787;
		}

		if (destinationMetric.equals("ft")) {
			size = size * 3.2808399;
		}

		if (destinationMetric.equals("yd")) {
			size = size * 1.0936133;
		}

		System.out.printf("%f %s", size, destinationMetric);
	}
}
