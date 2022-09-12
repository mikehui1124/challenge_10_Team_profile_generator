const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('findId', () => {
       it('should return input ID of employee', () => {
         const testId = 1234; 
         const name = 'John';
         const email = 'example@email.com';         

         const answer = testId;
         const result = new Employee(testId, name, email).findId();

         expect(result).toEqual(answer);
       })
    })
    describe('findName', () => {
        it('should return input Name of employee', () => {           
            const id = 1234;
            const testName = 'Mary';
            const email = 'example@email.com';  
              
            const answer = testName;
            const result = new Employee(id, testName, email).findName();
   
            expect(result).toEqual(answer);   
        })
    })
    describe('findName', () => {
        it('should return input Email of employee', () => {                       
            const id = 1234;
            const name = 'John';
            const testEmail = 'john@email.com';
              
            const answer = testEmail;
            const result = new Employee(id, name, testEmail).findEmail();
   
            expect(result).toEqual(answer);   
        })
    })
    describe('findRole', () => {
        it("should return designated role:'Employee' ", () => {                       
            const id = 1234;
            const name = 'John';
            const email = 'example@email.com'; 
            const testRole = 'Employee';
              
            const answer = testRole;
            const result = new Employee(id, name, email).findRole();
   
            expect(result).toEqual(answer);   
        })
    })
});