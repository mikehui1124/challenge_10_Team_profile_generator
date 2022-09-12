const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('findSchool', () => {
       it('should return School name of the intern', () => {
         const id = 5678; 
         const name = 'Anna';
         const email = 'anna@email.com';
         const testSchool = 'Salford Secondary';         

         const answer = testSchool;
         const result = new Intern(id, name, email, testSchool).findSchool();

         expect(result).toEqual(answer);
       })
    })
    describe('findRole', () => {
        it("should return designated role:'Intern' ", () => {                       
            const id = 5678; 
            const name = 'Anna';
            const email = 'anna@email.com';
            const school = 'Salford Secondary';
            const testRole = 'Intern';
              
            const answer = testRole;
            const result = new Intern(id, name, email, school).findRole();
   
            expect(result).toEqual(answer);   
        })
    })
});