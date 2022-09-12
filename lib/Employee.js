class Employee {
    constructor (id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }

    findId() {
        return this.id;
    }

    findName() {
        return this.name;
    }

    findEmail() {
        return this.email;        
    }

    findRole() {
        return 'Employee';
    }
}

module.exports = Employee;