import java.util.Scanner;

public class _7_GetMax {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String type = scanner.nextLine();

        if(type.equals("int")){
            int first = Integer.parseInt(scanner.nextLine());
            int second = Integer.parseInt(scanner.nextLine());
            int max = getMax(first, second);
            System.out.println(max);
        }else if(type.equals("char")){
            //TODO: call getMax() with char arguments
        }else if(type.equals("string")){
            //TODO: call getMax() with string arguments
        }
    }


    public static int getMax(int first, int second){
        if(first >= second){
            return first;
        }
        return second;
    }

    public static char getMax(char first, char second){
        if((int)first >= (int)second){
            return first;
        }
        return second;
    }

    public static String getMax(String first, String second){
        if(first.compareTo(second) >= 0){
            return first;
        }
        return second;
    }


}


