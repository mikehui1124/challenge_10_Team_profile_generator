const employee = require('./Employee');

class Intern extends employee {
    constructor (id, name, email, school) {
      super(id, name, email);
      this.school = school;     
    }

    findSchool() {
        return this.school;
    } 

    findRole() {
        return 'Intern';
    }
}

module.exports = Intern;