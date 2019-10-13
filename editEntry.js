#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const bpData = fs.readFileSync(path.join(__dirname, 'boilerplates.json'));
const boilerplates = JSON.parse(bpData);

const choices = Object.keys(boilerplates);
choices.push('none');

inquirer.prompt({
  name: 'boilerplate',
  type: 'list',
  message: 'Select a boilerplate entry to edit:',
  choices: choices,
})
  .then(answers => {
    const bpName = answers['boilerplate'];
    const boilerplate = boilerplates[bpName];
    
    const questions = [
      {
        name: 'updateName',
        type: 'input',
        message: `New boilerplate name (${answers['boilerplate']})`,
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
        name: 'updateUser',
        type: 'input',
        message: `Update github username (${boilerplate['githubUser']})`,
      },
      {
        name: 'updateRepo',
        type: 'input',
        message: `Update github repo name (${boilerplate['githubRepo']})`,
      }
    ];

    inquirer.prompt(questions)
      .then(answers => {
        let newName = "";          

        if (answers['updateName'] !== '') {
          delete boilerplates[bpName];
          newName = answers['updateName'];
        }
        else {
          newName = bpName;
        }

        boilerplates[newName] = {
          'githubUser': answers['updateUser'] !== '' ? answers['updateUser'] : boilerplate['githubUser'],
          'githubRepo': answers['updateRepo'] !== '' ? answers['updateRepo'] : boilerplate['githubRepo']
        };

        fs.writeFileSync(path.join(__dirname, 'boilerplates.json'), JSON.stringify(boilerplates));
      });
  });