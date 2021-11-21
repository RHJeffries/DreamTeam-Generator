const Engineer = require('../lib/engineer');

 describe ('Engineer', () => {

    it('should extend employee class', () => {
        const employee = new Engineer('Bob', 10, 'bob.down@standup.com', 'BobDownGit');
        expect(employee).toEqual(Object(employee));
      });
    });

    describe('get engineer github', () => {
        it('should get engineer github', () => {
          const employee = new Engineer('Bob', 10, 'bob.down@standup.com', 'BobDownGit');
          expect(employee.getGithub()).toBe('BobDownGit');
        });
      });
      
      describe('get role', () => {
        it('should get employee role', () => {
          const employee = new Engineer('Bob', 10, 'bob.down@standup.com', 'BobDownGit');
          expect(employee.getRole()).toBe('Engineer');
        });
      });