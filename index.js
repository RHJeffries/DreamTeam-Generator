const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "index.html");

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')


let employeeRoster = [];

const questionsManager = () => {

    inquirer.prompt([{
            type: 'input',
            message: 'Enter the name of the manager',
            name: 'name'
        },
        {
            type: 'number',
            message: 'Enter team member id number',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter email address',
            name: 'email'
        },
        {
            type: 'number',
            message: 'Enter the office number',
            name: 'officeNumber'
        }
    ]).then(val => {
        const manager = new Manager(val.name, val.id, val.email, val.officeNumber);
        console.log(manager);
        employeeRoster.push(manager);
        addTeam();
    });
}

function addTeam() {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeRole',
        message: 'Add an engineer or intern to the team?',
        choices: ['Engineer', 'Intern', 'Not at this time']
    }]).then(val => {

        if (val.employeeRole === 'Engineer') {
            questionEngineer();
        } else if (val.employeeRole === 'Intern') {
            questionIntern();
        } else {
            teamProfile();
        }
    });
}

function questionEngineer() {
    inquirer.prompt([{
        type: 'input',
        message: 'Enter the name of the engineer',
        name: 'name'
    },
    {
        type: 'number',
        message: 'Enter team member id number',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter email address',
        name: 'email'
    },
        {
            type: 'input',
            name: 'github',
            message: 'What is their Github username?'
        }
    ]).then(val => {
        const engineer = new Engineer(val.name, val.id, val.email, val.github);
        console.log(engineer);
        employeeRoster.push(engineer);
        addTeam();
    });
}

function questionIntern() {
    inquirer.prompt([{
        type: 'input',
            message: 'Enter the name of the intern',
            name: 'name'
        },
        {
            type: 'number',
            message: 'Enter team member id number',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter email address',
            name: 'email'
        },
        { 
            type: 'input',
            name: 'school',
            message: 'What school do they go to?'
        }
    ]).then(val => {
        const intern = new Intern(val.name, val.id, val.email, val.school);
        console.log(intern);
        employeeRoster.push(intern);
        addTeam();
    });
}

const init = () => {
    
        console.log("Welcome to the team profile generator. We'll start with adding the manager and add other team members after:")
        questionsManager()
    
};   



init();