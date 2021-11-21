const Employee = require('../lib/Employee');


describe("Employee", () => {
    
    describe ("get employee name", () => {
        it ("should return the employee name", () => {
            const employee = new Employee('Bob', 10, 'bob.down@standup.com');
            expect(employee.getName()).toBe('Bob');
        });
    });
    describe ("get employee id", () => {
        it ("should return the employee id", () => {
            const employee = new Employee('Bob', 10, 'bob.down@standup.com');
            expect(employee.getId()).toBe(10);
        });
    });
    
    describe ("get employee email", () => {
        it ("should return the employee email", () => {
            const employee = new Employee('Bob', 10, 'bob.down@standup.com');
            expect(employee.getEmail()).toEqual('bob.down@standup.com');
        });
    });
}
);