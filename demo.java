import java.util.Scanner;

public class demo {
    public static void main(String[] args) {
      int n;int f=1;
      System.out.println("Enter Any Number");
      Scanner sc= new Scanner(System.in);
       n=sc.nextInt();
    for(int i=1;i<=n;i++){
             f=f*i; 
    }
System.out.println("Factorial of number given number is:"+f);

       
    }
}
