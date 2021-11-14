const Employee = require('../lib/Employee')

describe("Employee", () => {
    it ("employee name gotten", () => {
    const employee = new Employee('Bob', 01, 'bob.down@standup.com');
    

    expect(employee.getName()).toEqual(expect.any(String));

    })
}
)