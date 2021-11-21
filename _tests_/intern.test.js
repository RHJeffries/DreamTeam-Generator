const Intern = require('../lib/intern');

describe ('Intern', () => {

    it('should extend employee class', () => {
        const employee = new Intern('Bob', 10, 'bob.down@standup.com', 'AdelUni');
        expect(employee).toEqual(Object(employee));
      });
    });

    describe('get intern school', () => {
        it('should get intern school', () => {
          const employee = new Intern('Bob', 10, 'bob.down@standup.com', 'AdelUni');
          expect(employee.getSchool()).toBe('AdelUni');
        });
      });
      
      describe('get role', () => {
        it('should get employee role', () => {
          const employee = new Intern('Bob', 10, 'bob.down@standup.com', 'AdelUni');
          expect(employee.getRole()).toBe('Intern');
        });
      });