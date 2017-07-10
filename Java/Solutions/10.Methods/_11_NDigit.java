import java.util.Scanner;

public class _11_NDigit {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = Integer.parseInt(scanner.nextLine());
        int index = Integer.parseInt(scanner.nextLine());
        findNthDigit(number, index);
    }

    public static void findNthDigit(int number, int index){

        int currentIndex = 1;

        while(number/10 != 0){
            if(currentIndex == index){
                System.out.println(number%10);
                break;
            }else {
                currentIndex++;
                number = number/10;
            }
        }

        if(number/10 == 0){
            System.out.println(number);
        }
    }
}
