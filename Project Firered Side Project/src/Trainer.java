
public class Trainer {
	// Creating some instance variables for the trainer
	public String name;
	public int idNum;
	public int badgeNumber;
	public int money = 100;
	public String status;
	public int potions = 5;

	// Standard Constructor just taking in
	// Ask TA what "this" does
	public Trainer(String nameIn, int idNumIn, int badgeNumberIn) {
		this.name = nameIn;
		this.idNum = idNumIn;
		this.badgeNumber = badgeNumberIn;
		// this.status = statusIn;
		// this.money = moneyIn;
	}

	// Copy constructor
	public Trainer(Trainer x) {
		this(x.name, x.idNum, x.badgeNumber);
	}

	// Instance Methods for the Trainer Class.
	// Mostly just some code for to display stats

	// Getters:
	public int getPotions() {
		return potions;
	}

	public int getBadge() {
		return badgeNumber;
	}

	// Simple Introduction displaying the player's name and badges
	public void sayHello() {
		System.out.println("Hi! My name is " + name + ".  I have " + badgeNumber + " badges!");
	}

	// Just adding badge number
	public void addBadgeNumber() {
		this.badgeNumber++;
	}

	// Adding some money (Going to do this in a different method)
	public int addMoney(int cashIn) {
		return this.money = cashIn;
	}

	// Just a status level that I added in... (Practice)
	public void trainerStatus(int badgeIn) {
		if (badgeIn <= 2) {
			status = "Beginner";
		} else if (badgeIn <= 4) {
			status = "Moderate";
		} else if (badgeIn <= 6) {
			status = "Pro";
		} else if (badgeIn <= 8) {
			status = "Master";
		} else {
			status = "Champion";
		}
	}

	public String toString() {
		return name + ", ID: " + idNum + ", Badge Number: " + badgeNumber + " $: " + money + " Status: " + status;
	}

}
