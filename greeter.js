class Greeter {
    greet(name) {
        const trimmedName = name.trim();
        const greeting = `Hello ${trimmedName}`;
        return greeting;
    }
}

module.exports = Greeter;
