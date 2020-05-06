
public class Squirtle {
	// Creating some instance variables for the Squirtle, just some stats
	public int health = 50;
	public int attackPower = 10;// Why does this have to be static
	public int defense = 12;

	// Standard Constructor just taking in
	// Ask TA what "this" does
	public Squirtle(int healthIn, int attackPowerIn, int defenseIn) {
		this.health = healthIn;
		this.attackPower = attackPowerIn;
		this.defense = defenseIn;
	}

	// Copy constructor
	public Squirtle(Squirtle x) {
		this(x.health, x.attackPower, x.defense);
	}

	// Instance Methods for the Squirtle Class.
	// This is the heart of squirtle

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
		return "***************" + "Squirtle: HP: " + health + "***************";

	}

}
