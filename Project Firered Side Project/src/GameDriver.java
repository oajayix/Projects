import java.util.Scanner;

public class GameDriver {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String name;
    int idNum;
    int badges = 0;
    String answer;
    boolean result;
    String nameOfPok;
    String rivalPoke;
    String battleResult;
    boolean battle;
    System.out.println("Welcome, what is your name? ");
    name = sc.next();

    System.out.println(
        "Hello " + name +
        " My name is Sophia, I am the interface that Yemi made to help ");
    System.out.print("assisst you through this program");
    enterKey();
    System.out.print(
        "Yemi made this program to test the current limitation of what he can do with Java.");
    enterKey();
    System.out.print(
        "As a result he decided to remake one of his favorite childhood games!");
    enterKey();
    System.out.println("Would you like to play?: YES, NO");
    answer = sc.next();
    if ((answer.equals("NO"))) {
      System.out.print("Oh, ok maybe next time.");
      result = false;
    } else {
      System.out.print("Great Lets Play");
      result = true;
    }
    while (result = true) {
      System.out.println(
          "Before we continue, can I ask what your ID number is ?");
      System.out.print("Enter Your ID: ");
      idNum = sc.nextInt();
      System.out.print("Here, I have prepared a new ID Card for you.");
      enterKey();
      Trainer playerOne = new Trainer(name, idNum, badges);
      playerOne.trainerStatus(playerOne.getBadge());
      System.out.println(playerOne);
      enterKey();
      System.out.println(
          "The world that Yemi has prepared some one that you more be");
      System.out.println("familiar with");
      enterKey();
      System.out.print(
          "You're a young teenager, ready to pick out your first Pokemon from Professor Oak with your best friend");
      enterKey();
      System.out.print(
          "This is an important decision, since it will affect you for the rest of your journey.");
      enterKey();
      System.out.print(
          "Since you made it to the lab late, there are only two Pokemon left!");
      enterKey();
      System.out.print("Who will choose first, Charmander or Squirtle");
      nameOfPok = sc.next();
      if (nameOfPok.equals("Charmander")) {
        Charmander poke = new Charmander(50, 10, 10);
        System.out.print("Charmander? Great Choice!");
        rivalPoke = "Squirtle";
        Squirtle enemyPoke = new Squirtle(50, 10, 10);
      } else {
        Squirtle poke = new Squirtle(50, 10, 10);
        System.out.print("Squirtle? Great Choice!");
        rivalPoke = "Charmander";
        Charmander enemyPoke = new Charmander(50, 10, 10);
      }
      System.out.print("Your rival decided to pick up " + rivalPoke);
      enterKey();
      System.out.println(
          "He is now challeging you to a battle, do you accept?");
      System.out.print("TYPE: Yes or No ");
      battleResult = sc.nextLine();
      if ((battleResult.equals("Yes"))) {
        battle = true;
      } else {
        battle = false;
      }
      while (battle = true) {
      }
    }
  }

  // Random helper Methods
  public static String enterKey() {
    Scanner sc = new Scanner(System.in);
    sc = new Scanner(System.in);
    return sc.nextLine();
  }
}
