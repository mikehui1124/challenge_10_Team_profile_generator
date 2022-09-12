const inquirer = require('inquirer');

// set up 4 groups of questions and set the relevant inquirer augument arrays
const managerQuestion = [
    {
        type: 'input',
        message: "What is team manager's ID? ",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is team manager's name? ",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is team manager's email? ",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is team manager's office number? ",
        name: 'officeNum',
    }
]

const engineerQuestion = [
    {
        type: 'input',
        message: "What is your engineer's ID? ",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is your engineer's name? ",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is your engineer's email? ",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your engineer's GitHub ID? ",
        name: 'github',
    }
]

const internQuestion = [
    {
        type: 'input',
        message: "What is your intern's ID? ",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is your intern's name? ",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is your intern's email? ",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your intern's school? ",
        name: 'school',
    }
]

const menuQuestion = [    
    {
        type: 'list',
        name: 'choice',
        message: "Which type of team member would you like to add? ",
        choices: [
            "Engineer",             
            "Intern", new inquirer.Separator(),
            "Don't want to add any more team member=> Generate team HTML"
        ]
    }
]

// export 4 question arrays in term of an object
module.exports = {
    managerQuestion, 
    engineerQuestion, 
    internQuestion, 
    menuQuestion
};