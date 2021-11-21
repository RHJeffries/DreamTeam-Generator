const inquirer = require('inquirer');
const fs = require('fs');
const jest = require("jest");

const Employee = require('./lib/Employee');
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
        addEmployee();
    });
}

function addEmployee() {
    let roleInfo = "";
    if (role === "Engineer") {
        roleInfo = "GitHub username";
    } else(role === "Intern"); {
        roleInfo = "school name";
    }
    inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }
    ])
}

function init() {
    questionsManager()
};

init();