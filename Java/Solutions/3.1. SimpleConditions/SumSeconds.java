import java.util.Scanner;

public class SumSeconds {
	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		int firstCompetition = scanner.nextInt();
		int secondCompetition = scanner.nextInt();
		int thirdCompetition = scanner.nextInt();

		int allSeconds = firstCompetition +  secondCompetition + thirdCompetition;

		String minutes = String.valueOf(allSeconds / 60);
		int sec = allSeconds % 60;
		String seconds = String.valueOf(sec);

		if (sec < 10) {
			seconds = "0" + String.valueOf(sec);
		}

		System.out.println(minutes + ":" + seconds);

//
//		int allSeconds = firstCompetition +  secondCompetition + thirdCompetition;
//
//		int minutes = 0;
//		if (allSeconds > 59) {
//			minutes++;
//			allSeconds = allSeconds - 60;
//		}
//
//		if (allSeconds > 59) {
//			minutes++;
//			allSeconds = allSeconds - 60;
//		}
//
//		if (allSeconds < 10) {
//			System.out.println(minutes + ":0" + allSeconds);
//		} else {
//			System.out.println(minutes + ":" + allSeconds);
//		}


	}
}
