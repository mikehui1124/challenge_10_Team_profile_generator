// import employee classes
const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
// import function generating html code according to new employees
const generateTeamPage = require('./pageGenerator.js');

const questions = require('./questions');

// declare 3 master employee arrays acting as augument of generateTeamPage()
const managers =[];
const engineers =[];
const interns = [];

// set up meunQuestion and direct to other functions
const askMenuQuestion = function() {
    inquirer
      .prompt(questions.menuQuestion)
      .then((answer) => {

        switch (answer.choice) {
            case 'Engineer' :
                askEngineerQuestions();
                break

            case 'Intern' :
                askInternQuestions();
                break
            
            case "Don't want to add any more team member=> Generate team HTML" :
                console.log('Generate the team page');
                // call the generate team page method from pageGenerator
                generateTeamPage(managers, engineers, interns);
                break

            }
     });
}

// set up managerQuestions and add object to the master array
const askManagerQuestions = function() {
    inquirer
      .prompt(questions.managerQuestion)
      .then((answer) => {

         // create the first manager object and store the answer
         const manager = new Manager(answer.id, answer.name, answer.email, answer.officeNum); 
         
         // add to the manager array to store the object
         managers.push(manager);

         // show menu and ask menu questions
         askMenuQuestion();

      });
}
// set up engineerQuestions and add object to the master array
const askEngineerQuestions = function() {
    inquirer
      .prompt(questions.engineerQuestion)
      .then((answer) => {

         // create the first engineer object and store the answer
         const engineer = new Engineer(answer.id, answer.name, answer.email, answer.github); 
         
         // add to the engineer array to store the new object
         engineers.push(engineer);

         // show menu and ask menu questions
         askMenuQuestion();

      });
}
// set up internQuestions and add object to the master array
const askInternQuestions = function() {
    inquirer
      .prompt(questions.internQuestion)
      .then((answer) => {

         // create the first intern object and store the answer
         const intern = new Intern(answer.id, answer.name, answer.email, answer.school); 
         
         // add to the engineer array to store the new object
         interns.push(intern);

         // show menu and ask menu questions
         askMenuQuestion();

      });
}
// export asking function to index.js
module.exports = askManagerQuestions;