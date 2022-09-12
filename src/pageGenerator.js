// require fs to read and write employee objects to template HTML file
const fs = require('fs');

// imports 3 classes to support the 3 employee arrays in the generating function
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// set up html generating function with 3 employee arrays
const generateTeamPage = function(managers, engineers, interns) {

    // import template HTML file pending to write employee object
    let baseHtml = fs.readFileSync('./template/index.html', 'utf8');

    if (baseHtml) {
        // add manager html including the new manager objects
        let managerHtml = "";
        managers.forEach(element => {
            managerHtml += `<div class="col-4" >
            <div class="manager">
               <h5 id="" class="name">${element.findName()}</h5>
               <ul class="list-group">
                  <li class="icon"><img id="managerIcon" src="../src/manager-icon.png"></img>  Manager</li>
                  <li class="list-group-item">ID: ${element.findId()}</li>
                  <li class="list-group-item">Email: <a href= "mailto:${element.findEmail()}"> ${element.findEmail()}</a></li>
                  <li class="list-group-item">Office number: ${element.findOffice()}</li>
               </ul>
               </br>                  
            </div>
         </div>`;            
        });

        // add engineer html including the new engineer objects
        let engineerHtml ="";
        engineers.forEach(engineer => {
            engineerHtml += `<div class="col-4" >
            <div class="engineer">
               <h5 id="" class="name">${engineer.findName()}</h5>
               <ul class="list-group">
                  <li class="icon"><img id="engineerIcon" src="../src/engineer.png"></img>  Engineer</li>
                  <li class="list-group-item">ID: ${engineer.findId()}</li>
                  <li class="list-group-item">Email: <a href= "mailto:${engineer.findEmail()}"> ${engineer.findEmail()}</a></li>
                  <li class="list-group-item">GitHub ID: <a href="https://github.com/${engineer.findGithub()}" targent="_blank">${engineer.findGithub()}</a></li>
               </ul>
               </br>                  
            </div>
         </div>`;
        });

        // add intern html including the new intern objects
        let internHtml ="";
        interns.forEach(intern => {
            internHtml += `<div class="col-4" >
            <div class="intern">
               <h5 id="" class="name">${intern.findName()}</h5>
               <ul class="list-group">
                  <li class="icon"><img id="internIcon" src="../src/intern.png"></img>  Intern</li>
                  <li class="list-group-item">ID: ${intern.findId()}</li>
                  <li class="list-group-item">Email: <a href= "mailto:${intern.findEmail()}"> ${intern.findEmail()}</a></li>
                  <li class="list-group-item">School: ${intern.findSchool()}</li>
               </ul>
               </br>                  
            </div>
         </div>`;
        });

        // replace the placeholders in template HTML file with actual data including employee objects
        baseHtml = baseHtml.replace('<!--MANAGERS-->', managerHtml);
        baseHtml = baseHtml.replace('<!--ENGINEERS-->', engineerHtml);
        baseHtml = baseHtml.replace('<!--INTERNS-->', internHtml);

        // write the modified Html to the resulting team page HTML
        fs.writeFile('./dist/team.html', baseHtml, (err) =>
               err ? console.log(err) : console.log('You have generated Team Page with your employee information, please check team.html'));
        
    }  
}

// export html generating function to the asking function
module.exports = generateTeamPage;
