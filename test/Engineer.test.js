const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('findGithub', () => {
       it('should return Github ID of engineer', () => {
         const id = 1234; 
         const name = 'Peter';
         const email = 'peter@email.com';
         const testGithub = 'peter5678';         

         const answer = testGithub;
         const result = new Engineer(id, name, email, testGithub).findGithub();

         expect(result).toEqual(answer);
       })
    })
    describe('findRole', () => {
        it("should return designated role:'Engineer' ", () => {                       
            const id = 1234;
            const name = 'Peter';
            const email = 'peter@email.com';
            const github = 'peter5678'; 
            const testRole = 'Engineer';
              
            const answer = testRole;
            const result = new Engineer(id, name, email, github).findRole();
   
            expect(result).toEqual(answer);   
        })
    })
});