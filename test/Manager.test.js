const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('findOffice', () => {
       it('should return Office Number of the manager', () => {
         const id = 3456; 
         const name = 'Roger';
         const email = 'roger@email.com';
         const testOffice = '6789';         

         const answer = testOffice;
         const result = new Manager(id, name, email, testOffice).findOffice();

         expect(result).toEqual(answer);
       })
    })
    describe('findRole', () => {
        it("should return designated role:'Manager' ", () => {                       
            const id = 1234;
            const name = 'Roger';
            const email = 'roger@email.com';
            const office = '6789'; 
            const testRole = 'Manager';
              
            const answer = testRole;
            const result = new Manager(id, name, email, office).findRole();
   
            expect(result).toEqual(answer);   
        })
    })
});