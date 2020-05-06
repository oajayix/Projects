
public class Charmander {
	// Creating some instance variables for the Charmander, just some stats
	public int health = 50;
	public int attackPower = 10;
	public int defense = 10;

	// Standard Constructor just taking in
	// Ask TA what "this" does
	public Charmander(int healthIn, int attackPowerIn, int defenseIn) {
		this.health = healthIn;
		this.attackPower = attackPowerIn;
		this.defense = defenseIn;
	}

	// Copy constructor
	public Charmander(Charmander x) {
		this(x.health, x.attackPower, x.defense);
	}

	// Instance Methods for the Charmander Class.
	// This is the heart of charmander

	// Getters
	public int getHealth() {
		return health;
	}

	public int getAttackPower() {
		return attackPower;
	}

	// Regular Instance Methods, Mostly just movement and stuff
	public void takeDamage(int healthLost) {
		health = health - healthLost;
	}

	// Adds a potion to replace some health
	public void addPotion(int potionIn) {
		health = health + potionIn;
	}

	public String toString() {
		return "***************" + "Charmander: HP: " + health + "***************";

	}

}
