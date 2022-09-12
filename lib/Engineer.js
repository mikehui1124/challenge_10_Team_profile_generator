const employee = require('./Employee');

class Engineer extends employee {
    constructor (id, name, email, github) {
      super(id, name, email);
      this.github = github;     
    }

    findGithub() {
        return this.github;
    } 

    findRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;