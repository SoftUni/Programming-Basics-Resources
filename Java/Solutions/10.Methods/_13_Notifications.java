import java.util.Scanner;

public class _13_Notifications {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numberOfLine = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < numberOfLine; i++) {
            String command = scanner.nextLine();
            if(command.equals("success")) {
                String operation = scanner.nextLine();
                String message = scanner.nextLine();
                System.out.println(showSuccess(operation,message));
            }else if(command.equals("error")){
                String operation = scanner.nextLine();
                String code = scanner.nextLine();
                System.out.println(showError(operation,code));
            }
        }
    }

    public static String showSuccess(String operation, String message){
        String result = "";
        result = "Successfully executed " + operation + ".\n==============================\n"+ "Message: "+ message+ ".";
        return result;
    }
    public static String showError(String operation, String code){
        String reason = "Internal System Failure.";
        if(Integer.parseInt(code) > 0){
            reason = "Invalid Client Data.";
        }

        return String.format("Error: Failed to execute %s.\n==============================\nError Code: %s.\nReason: %s",
                operation, code, reason);
    }
}
