// Definition: Object-Oriented Programming is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).

// Key Concepts:
// Class: A blueprint for creating objects (a particular data structure), providing initial values for state (member variables or attributes), and implementations of behavior (member functions or methods).
// Object: An instance of a class.
// Inheritance: A mechanism for one class to extend another class.
// Encapsulation: Keeping the data (attributes) and the code (methods) safe from external interference and misuse.
// Polymorphism: The ability of different classes to be treated as instances of the same class through inheritance.

// OOP Principles in JavaScript

// Objects and Classes:
// In traditional OOP languages like Java or C++, classes are the focus. JavaScript is a bit different; it's a prototype-based language. This means that while it can mimic OOP with classes (especially after ES6), it does so using prototypes.

// ES6 Classes:
// JavaScript ES6 introduced a class syntax, which simplifies creating objects and implementing inheritance.
// However, these classes are primarily syntactical sugar over JavaScript's existing prototype-based inheritance.

// Constructor Functions:
// Before ES6, constructor functions were used to mimic an OOP-style class.

// Prototype Inheritance:
// JavaScript uses prototypes where other languages might use classes for inheritance.

// Example 1: Defining a Class
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    displayInfo() {
        console.log(`This is a ${this.brand} ${this.model}.`);
    }
}

let myCar = new Car("Toyota", "Corolla");
myCar.displayInfo(); // Output: This is a Toyota Corolla.

// Example 2: Inheritance
class ElectricCar extends Car {
    constructor(brand, model, batteryCapacity) {
        super(brand, model);
        this.batteryCapacity = batteryCapacity;
    }

    displayBatteryInfo() {
        console.log(`It has a battery capacity of ${this.batteryCapacity} kWh.`);
    }
}

let myElectricCar = new ElectricCar("Tesla", "Model S", 100);
myElectricCar.displayInfo(); // Output: This is a Tesla Model S.
myElectricCar.displayBatteryInfo(); // Output: It has a battery capacity of 100 kWh.

// 3. Closures for Encapsulation
// In JavaScript, closures can be used to create private variables or functions.

function createCounter() {
    let count = 0;  // Private variable
    return {
        increment: function() { count++; },
        getCount: function() { return count; }
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1
// counter.count is not directly accessible

// In this example, count is a private variable that can't be accessed directly outside createCounter.

// 4. Using Symbol for Pseudo-Private Properties
// Symbol can create unique identifiers, useful for adding pseudo-private properties to objects.
const nameSymbol = Symbol('name');

class Person {
    constructor(name) {
        this[nameSymbol] = name;
    }

    getName() {
        return this[nameSymbol];
    }
}

const alice = new Person("Alice");
console.log(alice.getName()); // Alice
// alice.nameSymbol is not accessible


