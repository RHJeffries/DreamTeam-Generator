const inquirer = require('inquirer');
const fs = require('fs');
const jest = require("jest");

const Employee = require('./lib/Employee');
const Manager = require('./lib/manager');


let employeesArr = [];

const questionsManager = () => {

    inquirer.prompt([{
            type: 'input',
            message: 'Enter the name of the manager',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter team member id',
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
            name: 'office number'
        }
    ])
}

function init() {
    questionsManager()
};

init();