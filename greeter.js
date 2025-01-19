class Greeter {
    greet(name) {
        const trimmedName = name.trim();
        const capitalisedName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
        const greeting = `Hello ${capitalisedName}`;
        return greeting;
    }
}

module.exports = Greeter;
