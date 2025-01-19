    
const Greeter = require('./Greeter');

describe('Greeter', () => {
    let greeter = new Greeter();

    beforeEach(() => {
        greeter = new Greeter();
        // Mock console.log
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    //1. Write a Greeter class with greet function that receives a name as input and outputs Hello <name> . The signature of greet should not change throughout the kata. You are allowed to construct Greeter object as you please.
    test('should greet Hello <name>', () => {
        // Store data as a variable before mocking it
        const RealDate = Date;
        // Mock the date 
        global.Date = jest.fn(() => {
            // Return the mocked date
            return new RealDate('2025-01-19T015:00:00Z');
        });
    
        const result = greeter.greet('Anthony');
        expect(result).toBe('Hello Anthony');
        // restores original Date constructor to avoid side effects on other tests
        global.Date = RealDate; 

    });
    //2. greet trims the input
    test('should greet Hello <name> while trimming whitespace', () => {
        const RealDate = Date;
        global.Date = jest.fn(() => {
            return new RealDate('2025-01-19T015:00:00Z');
        });
    
        const result = greeter.greet('      Anthony     ');
        expect(result).toBe('Hello Anthony');
        global.Date = RealDate; 
    });

    //3. greet capitalizes the first letter of the name
    test('should greet Hello <name> with capital letter of first letter', () => {
        const RealDate = Date;
        global.Date = jest.fn(() => {
            return new RealDate('2025-01-19T015:00:00Z');
        });

        const result = greeter.greet('      anthony     ');
        expect(result).toBe('Hello Anthony');
        global.Date = RealDate;
    });

    //4. greet returns Good morning <name> when the time is 06:00-12:00
    test('should return "Good morning" between 06:00 and 12:00', () => {
        const RealDate = Date;
        global.Date = jest.fn(() => {
            return new RealDate('2025-01-19T09:00:00Z');
        });
    
        const result = greeter.greet('      anthony     ');
        expect(result).toBe('Good morning Anthony');
        global.Date = RealDate; 
    });

    //5. greet returns Good evening <name> when the time is 18:00-22:00
    test('should return "Good evening" between 18:00 and 22:00', () => {
        const RealDate = Date;
        global.Date = jest.fn(() => {
            return new RealDate('2025-01-19T20:00:00Z');
        });
    
        const result = greeter.greet('      anthony     ');
        expect(result).toBe('Good evening Anthony');
        global.Date = RealDate; 
    });

    //6. greet returns Good night <name> when the time is 22:00-06:00
    test('should return "Good night" between 22:00 and 06:00', () => {
        const RealDate = Date;
        global.Date = jest.fn(() => {
            return new RealDate('2025-01-19T02:00:00Z');
        });
    
        const result = greeter.greet('      anthony     ');
        expect(result).toBe('Good night Anthony');
        global.Date = RealDate; 
    });

    //7. greet logs to console each time it is called
    test('should display greet message in console', () => {
        const RealDate = Date;
        global.Date = jest.fn(() => {
            return new RealDate('2025-01-19T015:00:00Z');
        });
    
        const result = greeter.greet('Anthony');
        expect(result).toBe('Hello Anthony');
        expect(console.log).toHaveBeenCalledWith('Hello Anthony');
        global.Date = RealDate; 
    });
});