import java.util.Scanner;
import java.awt.event.*;
import javax.swing.*;

/*Food object that we can interact with*/
public class Food {
	/*Properties of the Food*/
	String name;
	int price;
	/*Properties of the Food*/

	/* Constructor to bring in the food and getters and setters */
	public Food(String nameIn, int priceIn) {
		name = nameIn;
		price = priceIn;
	}

	// Getter
	public String getName() {
		return name;
	}

	// Getter
	public int getPrice() {
		return price;
	}

	/*To String for debugging */
	public String toString() {
		return getName() + " " + getPrice();
	}
	/* Constructor to bring in the food and getters and setters */
	
	
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		Boolean flag = true;
		String text;
		int counter = 0;
		int priceSum = 0;
		int[] priceArray = new int[10];

		/* Our intro and menu */
		System.out.println("Hello Welcome to our resturant!");
		System.out.println("What would you like to order");
		System.out.println("Pizza----> $5");
		System.out.println("Hot Dogs----> $3");
		System.out.println("Fries----> $2");
		System.out.println("Soda----> $1");

		/* Loop to check if the customers ordered more food */
		while (flag == true) {
			/* Input from keyboard */
			text = scan.nextLine();

			/*
			 * If the customer chooses a food from the menu, it is put inside of an object
			 */
			/* And the price is put inside of a price array to be added later */

			if (text.equals("Pizza") == true) { // Pizza
				Food Pizza = new Food("Pizza", 5);
				priceArray[counter] = Pizza.getPrice();
				counter++;

			} else if (text.equals("Hot Dog") == true) { // Hot Dog
				Food HotDog = new Food("Hot Dog", 3);
				priceArray[counter] = HotDog.getPrice();
				counter++;

			} else if (text.equals("Fries") == true) { // Fries
				Food Fries = new Food("Fries", 2);
				priceArray[counter] = Fries.getPrice();
				counter++;

			} else if (text.equals("Soda") == true) { // Soda
				Food Soda = new Food("Soda", 1);
				priceArray[counter] = Soda.getPrice();
				counter++;

			}
			if((text.equals("Soda") == false) && (text.equals("Fries") == false) && (text.equals("Hot Dog") == false) && (text.equals("Pizza") == false)) {
				throw new IllegalArgumentException("WHAT YOU ENTER IS NOT FOOD!!!");
			}
			/*Asking if the customer wants to continue to order food*/
			System.out.println("Do you want anything else! (Yes/No)");
			text = scan.nextLine();
			/*Check is the input is no and act accordingly*/
			if (text.equals("No") || text.equals("no") || text.equals("n") || text.equals("N")) {
				flag = false;
			}
			/*Displaying Menu Again*/
			System.out.println("Pizza----> $5");
			System.out.println("Hot Dogs----> $3");
			System.out.println("Fries----> $2");
			System.out.println("Soda----> $1");

		} // End While Loop

		/*Loop to add up all of the prices in the array*/
		for (int i = 0; i < priceArray.length; i++) {
			priceSum += priceArray[i];
		}

		System.out.print("Your total sum is: $" + priceSum);

	}

}
