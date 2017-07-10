import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class _14_NumberToWord {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numberOfLines = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < numberOfLines; i++) {
            int number = Integer.parseInt(scanner.nextLine());

            if(number > 999){
                System.out.println("too large");
            }else if(number<-999){
                System.out.println("too small");
            }else if (number/100 == 0){
                System.out.print("");
            }else {
                System.out.println(letterize(number));
            }
        }
    }

    public static String letterize(int number){
        String result = "";
        List<String> numbersWord = new ArrayList<>();
        numbersWord.addAll(Arrays.asList("","one", "two","three","four","five",
                "six","seven","eight","nine","ten","eleven",
                "twelve","thirteen", "fourteen", "fifteen",	"sixteen", "seventeen", "eighteen","nineteen", "twenty","thirty", "forty","fifty","sixty","seventy","eighty","ninety"));

        if(String.valueOf(number).charAt(0) == '-'){
            result = "minus ";
            number = number * (-1);
        }

        result = result + numbersWord.get(number/100) + "-hundred";
        number = number%100;
        if(number>0 && number<10){
            result = result + " and " + numbersWord.get(number);
        }else if(number>=10 && number<=20){
            result =  result + " and " + numbersWord.get(number);
        }else if(number > 20){
            result = result + " and " + numbersWord.get((number/10) + 18) + " " + numbersWord.get(number%10);
        }
        return  result;
    }
}
