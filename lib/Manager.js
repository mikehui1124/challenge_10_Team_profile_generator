const employee = require('./Employee');

class Manager extends employee {
    constructor (id, name, email, officeNum) {
      super(id, name, email);
      this.officeNum = officeNum;     
    }

    findOffice() {
        return this.officeNum;
    } 

    findRole() {
        return 'Manager';
    }
}

module.exports = Manager;