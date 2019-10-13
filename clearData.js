#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const questions = [
  {
    name: 'confirm',
    type: 'confirm',
    message: 'Are you sure you want to remove all of your saved boilerplates?'
  }
];

function clearBoilerplateList() {
  fs.writeFileSync(path.join(__dirname, 'boilerplates.json'), JSON.stringify({}));
}

inquirer.prompt(questions)
  .then(answers => {
    if (answers['confirm']) clearBoilerplateList();
  });