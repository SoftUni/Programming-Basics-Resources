import java.util.Scanner;

public class _12_CurrencyConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double money = Double.parseDouble(scanner.nextLine());
        String fromCurrency = scanner.nextLine();
        String toCurrency = scanner.nextLine();
        double bgnMoney = 0.0;

        if(fromCurrency.equals("USD")){
            bgnMoney = money * 1.79549;
        }else if(fromCurrency.equals("EUR")){
            bgnMoney = money * 1.95583;
        }else if (fromCurrency.equals("GBP")){
            bgnMoney = money * 2.53405;
        }else if(fromCurrency.equals("BGN")){
            bgnMoney = money;
        }

        if(toCurrency.equals("USD")){
            System.out.printf("%.2f USD\n", bgnMoney / 1.79549);
        }else if(toCurrency.equals("EUR")){
            System.out.printf("%.2f EUR\n", bgnMoney / 1.95583);
        }else if(toCurrency.equals("GBP")){
            System.out.printf("%.2f GBP\n", bgnMoney / 2.53405);
        }else if(toCurrency.equals("BGN")){
            System.out.printf("%.2f BGN", bgnMoney);
        }
    }
}
