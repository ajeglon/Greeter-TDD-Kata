    
const Greeter = require('./Greeter');

describe('Greeter', () => {
    let greeter = new Greeter();

    //1. Write a Greeter class with greet function that receives a name as input and outputs Hello <name> . The signature of greet should not change throughout the kata. You are allowed to construct Greeter object as you please.
    test('should greet Hello <name>', () => {
        const result = greeter.greet('Anthony');
        expect(result).toBe('Hello Anthony');
    });
    //2. greet trims the input
    test('should greet Hello <name> while trimming whitespace', () => {
        const result = greeter.greet('      Anthony     ');
        expect(result).toBe('Hello Anthony');
    });

    //3. greet capitalizes the first letter of the name
    test('should greet Hello <name> with capital letter of first letter', () => {
        const result = greeter.greet('      anthony     ');
        expect(result).toBe('Hello Anthony');
    });

    //4. greet returns Good morning <name> when the time is 06:00-12:00
    test('should return "Good morning" between 06:00 and 12:00', () => {
        jest.spyOn(global, 'Date').mockImplementation(() => new Date('2025-01-19T08:00:00Z'));
        const result = greeter.greet('anthony');
        expect(result).toBe('Good morning Anthony');
    });

    //5. greet returns Good evening <name> when the time is 18:00-22:00

    //6. greet returns Good night <name> when the time is 22:00-06:00

    //7. greet logs to console each time it is called
});