const Manager = require('../lib/manager');

describe('Manager', () => {
    it('should extend employee class', () => {
      const employee = new Manager('Bob', 10, 'bob.down@standup.com', 5);
      expect(employee).toEqual(Object(employee));
    });
  });
  
  describe('get manager office number', () => {
    it('should get manager office number', () => {
      const employee = new Manager('Bob', 10, 'bob.down@standup.com', 5);
      expect(employee.getOfficeNumber()).toBe(5);
    });
  });
  
  describe('get role', () => {
    it('should get employee role', () => {
      const employee = new Manager('Bob', 10, 'bob.down@standup.com', 5);
      expect(employee.getRole()).toBe('Manager');
    });
  });