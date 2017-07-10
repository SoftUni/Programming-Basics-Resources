
public class _1_PrintReceipt {
    public static void main(String[] args) {
        printReceipt();
    }
    public static void printReceipt(){
        printReceiptHeader();
        printReceiptBody();
        printReceiptFooter();
    }

    public static void printReceiptHeader(){
        System.out.println("CASH RECEIPT");
        System.out.println("------------------------------");
    }

    public static void printReceiptBody(){
        System.out.println("Charged to____________________");
        System.out.println("Received by___________________");
    }

    public static void printReceiptFooter(){
        System.out.println("------------------------------");
        System.out.println("(c) SoftUni");
    }
}
