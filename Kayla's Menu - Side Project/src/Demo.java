import java.util.Scanner;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import static javax.swing.JOptionPane.showMessageDialog;

public class Demo extends JFrame implements ActionListener {
	/* Variables */
	public static int[] priceArray = new int[10];
	public boolean finishedOrder = true;
	int count = 0;
	/* Variables */

	/* Button Making */
	public JButton burger;
	public JButton alfredo;
	public JButton steak;
	public JButton lobster;
	public JButton duck;
	public JButton checkout;
	/* Button Making */

	public Demo() {

		Container c = getContentPane();

		/* Set layout for the content */
		c.setLayout(new FlowLayout());

		/* Button Making */
		burger = new JButton("Burger with Fries $18");
		alfredo = new JButton("Alfredo with Salmon $25");
		steak = new JButton("Steak $28");
		lobster = new JButton("Lobster $22");
		duck = new JButton("Duck $23");
		checkout = new JButton("checkout");
		/* Button Making */

		/* Setting ActionListners */
		burger.addActionListener(this);
		alfredo.addActionListener(this);
		steak.addActionListener(this);
		lobster.addActionListener(this);
		duck.addActionListener(this);
		checkout.addActionListener(this);
		/* Setting ActionListners */

		/* Adding the buttons to the container */
		c.add(burger);
		c.add(alfredo);
		c.add(steak);
		c.add(lobster);
		c.add(duck);
		c.add(checkout);
		/* Adding the buttons to the container */

	}

	/* ActionEvent Function to Respond with Every Button Press and Price */
	public void actionPerformed(ActionEvent e) {
		/* Pizza */
		if (e.getActionCommand().equals("Burger with Fries $18")) {
			/* Exception if the order is already done */
			exceptionHandling();
			priceArray[count] = 18; /* Puts Price into the array */
			count++;/* Update the index */
			calculatePrice(priceArray); /*Calls Method*/

		} else if (e.getActionCommand().equals("Alfredo with Salmon $25")) {
			/* Exception if the order is already done */
			exceptionHandling();

			priceArray[count] = 25;
			count++;
			calculatePrice(priceArray);

		} else if (e.getActionCommand().equals("Steak $28")) {
			/* Exception if the order is already done */
			exceptionHandling();

			priceArray[count] = 28;
			count++;
			calculatePrice(priceArray);

		} else if (e.getActionCommand().equals("Lobster $22")) {
			/* Exception if the order is already done */
			exceptionHandling();

			priceArray[count] = 22;
			count++;
			calculatePrice(priceArray);

		} else if (e.getActionCommand().equals("Duck $23")) {
			/* Exception if the order is already done */
			exceptionHandling();
			priceArray[count] = 23;
			count++;
			calculatePrice(priceArray);

		} else if (e.getActionCommand().equals("checkout")) {
			/* Exception if the order is already done */
			exceptionHandling();
			/* Setting the flag for the finish order to false */
			finishedOrder = false;
			calculatePrice(priceArray);
			showMessageDialog(null, "Thank You, Come Again!!!");
		}

	}

	/* Simple Function to calculate the price and print out a display message */
	public void calculatePrice(int[] array) {
		int sum = 0;
		for (int i = 0; i < array.length; i++) {
			sum += array[i];
		}
		showMessageDialog(null, "The sum is: $" + sum);
		

	}

	/* Simple Function to handle the exception */
	public void exceptionHandling() {
		if (finishedOrder == false) {
			showMessageDialog(null, "The order is already done!!!");
			throw new IllegalArgumentException("The order is already done!!!");
		}
	}

	/* Main Method, to run everything */
	public static void main(String[] args) {
		showMessageDialog(null, "Welcome to my resturant, you can order up to 10 items.");
		/* Making the Window for the GUI */
		Demo myWindow = new Demo();
		/* Setting the size */
		myWindow.setSize(400, 400);
		/* Showing it */
		myWindow.show();

	}

}
