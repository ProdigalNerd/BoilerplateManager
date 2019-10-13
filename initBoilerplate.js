#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const download = require('download-git-repo');

const bpData = fs.readFileSync(path.join(__dirname, 'boilerplates.json'));
const boilerplates = JSON.parse(bpData);

const choices = Object.keys(boilerplates);
choices.push('none');

const questions = [
  {
    name: 'templates',
    type: 'list',
    message: 'What boilerplate would you like to instantiate?',
    choices: choices,
  }
];

function installBoilerplate(choice) {
  const boilerplate = boilerplates[choice];

  download(`${boilerplate.githubUser}/${boilerplate.githubRepo}`, './', (err) => {
    console.error(err);
  });
}

inquirer.prompt(questions)
  .then(answers => {
    if (answers['templates'] === 'none') return;
    installBoilerplate(answers['templates']);
  });