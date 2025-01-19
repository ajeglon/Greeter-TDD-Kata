class Greeter {
    greet(name) {
        const trimmedName = name.trim();
        const capitalisedName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
        const currentTime = new Date();
        const hours = currentTime.getHours();
        let greeting;

        if (hours >= 6 && hours < 12) {
            greeting = `Good morning ${capitalisedName}`;
        } else if (hours >= 18 && hours < 22) {
            greeting = `Good evening ${capitalisedName}`;
        } else if ((hours >= 22 && hours <= 23) || (hours >= 0 && hours < 6)) {
            greeting = `Good night ${capitalisedName}`;
        } else {
            greeting = `Hello ${capitalisedName}`;
        }
        console.log(greeting);
        return greeting;
    }
}

module.exports = Greeter;
