#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const bpData = fs.readFileSync(path.join(__dirname, 'boilerplates.json'));
const boilerplates = JSON.parse(bpData);

const choices = Object.keys(boilerplates);
choices.push('none');

inquirer.prompt({
  name: 'bpToDelete',
  type: 'list',
  message: 'Select a boilerplate to remove:',
  choices: choices,
})
  .then(answers => {
    const selection = answers['bpToDelete'];

    inquirer.prompt({
      name: 'bpDeleteConfirm',
      type: 'confirm',
      message: `Are you sure you want to delte ${selection}`
    })
      .then(answers => {
        const confirm = answers['bpDeleteConfirm'];
        
        if (confirm) {
          delete boilerplates[selection];
          
          fs.writeFileSync(path.join(__dirname, 'boilerplates.json'), JSON.stringify(boilerplates));
        }
      });
  });