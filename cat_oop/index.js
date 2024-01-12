class Cat {
    constructor(name) {
        this.name = name;
        this.tiredness = 50;  // 0 = not tired, 100 = very tired
        this.hunger = 50;     // 0 = not hungry, 100 = very hungry
        this.loneliness = 50; // 0 = not lonely, 100 = very lonely
        this.happiness = 50;  // 0 = not happy, 100 = very happy
    }

    // Method to feed the cat, decreasing hunger
    feed(amount = 10) {
        this.hunger = Math.max(0, this.hunger - amount);
        this.happiness = Math.min(100, this.happiness + amount / 2);
    }

    // Method to let the cat sleep, decreasing tiredness
    sleep(amount = 10) {
        this.tiredness = Math.max(0, this.tiredness - amount);
        this.happiness = Math.min(100, this.happiness + amount / 2);
    }

    // Method to play with the cat, decreasing loneliness
    play(amount = 10) {
        this.loneliness = Math.max(0, this.loneliness - amount);
        this.happiness = Math.min(100, this.happiness + amount);
    }

    // Method to pet the cat, increasing happiness
    pet(amount = 5) {
        this.happiness = Math.min(100, this.happiness + amount);
    }

    // Method to print the cat's status
    status() {
        console.log(`${this.name}'s Status:`);
        console.log(`Tiredness: ${this.tiredness < 50 ? 'Not Tired' : 'Tired'}`);
        console.log(`Hunger: ${this.hunger < 50 ? 'Not Hungry' : 'Hungry'}`);
        console.log(`Loneliness: ${this.loneliness < 50 ? 'Content' : 'Lonely'}`);
        console.log(`Happiness: ${this.happiness > 50 ? 'Happy' : 'Not Happy'}`);
    }
}

// Example usage
let myCat = new Cat("Whiskers");
myCat.feed(20);
myCat.play(15);
myCat.pet(5);
myCat.sleep(10);
myCat.status();