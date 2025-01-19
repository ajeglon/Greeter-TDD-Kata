class Greeter {
    greet(name) {
        const trimmedName = name.trim();
        const capitalisedName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
        const currentTime = new Date();
        const hours = currentTime.getHours();
        let greeting;

        if (hours >= 6 && hours < 12) {
            greeting = `Good morning ${capitalisedName}`;
        } else {
            greeting = `Hello ${capitalisedName}`;
        }
        
        return greeting;
    }
}

module.exports = Greeter;
