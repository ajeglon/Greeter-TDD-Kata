// Readline handles inputs and outputs from console
const readline = require('node:readline');
class Greeter {
    // Constructor is called when a new instance of Greeter is created.
    constructor() {
        // Creates readline interface
        this.rl = readline.createInterface({
            // Standard input and output
            input: process.stdin,
            output: process.stdout,
        });
    }
    // Prompt user for name
    askName() {
        // Uses readline to ask for name
        this.rl.question(`What's your name? `, (name) => {
            this.greet(name);
            this.rl.close();
        });
    }
    greet(name) {
        const trimmedName = name.trim();
        const capitalisedName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
        const currentTime = new Date();
        const hours = currentTime.getHours();
        let greeting;

        // Greeting based on time of day
        if (hours >= 6 && hours < 12) {
            greeting = `Good morning ${capitalisedName}`;
        } else if (hours >= 18 && hours < 22) {
            greeting = `Good evening ${capitalisedName}`;
        } else if ((hours >= 22 && hours <= 23) || (hours >= 0 && hours < 6)) {
            greeting = `Good night ${capitalisedName}`;
        } else {
            greeting = `Hello ${capitalisedName}`;
        }
        // prints greeting to console
        console.log(greeting);
        return greeting;
    }
    // Closes readline
    cleanup() {
        this.rl.close();
    }
}

const greeter = new Greeter();
greeter.askName();

module.exports = Greeter;