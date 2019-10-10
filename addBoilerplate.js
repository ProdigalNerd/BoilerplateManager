#!/usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer');

const rawData = fs.readFileSync('boilerplates.json')

let boilerplates = JSON.parse(rawData);

const questions = [
  {
    name: 'boilerplate_name',
    type: 'input',
    message: 'What would you like to name the boilerplate?',
    validate: (input) => {
      const nameExists = !!boilerplates[input];

      if (nameExists) {
        return 'Boilerplate name already in use.';
      }
      else if (!(/^([A-Za-z\-\_\d])+$/.test(input))) {
        return 'Boilerplate name may only include letters, numbers, underscores and hashes.';
      }

      return true;
    }
  },
  {
    name: 'githubUser',
    type: 'input',
    message: 'Enter the github.com username for the boilerplate. Please only enter valid usernames.',
  },
  {
    name: 'githubRepo',
    type: 'input',
    message: 'Enter the github.com repo name for the boilerplage. Please only enter valid repo names.',
  }
];

function writeNewBoilerplateToFile(answers) {
  boilerplates[answers['boilerplate_name']] = {
    'githubUser': answers['githubUser'],
    'githubRepo': answers['githubRepo']
  };

  fs.writeFileSync('boilerplates.json', JSON.stringify(boilerplates));
}

inquirer.prompt(questions)
  .then(answers => {
    writeNewBoilerplateToFile(answers);
  });
