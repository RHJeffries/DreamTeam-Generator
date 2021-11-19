const inquirer = require('inquirer');
const fs = require('fs');


const Manager = require('./lib/manager');

const questions = () => {
    return inquirer.prompt ([{
    type: 'input',
    message: 'What is title of your project?',
    name: 'title',
    validate: titleInput => {
      if (titleInput) {
          return true;
      } else {
          console.log('Every good project needs a title');
          return false;
      }
  }
    }])
}
