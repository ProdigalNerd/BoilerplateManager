#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const download = require('download-git-repo');

const boilerplates = {
  "react-boilerplate": {
    githubUser: 'ProdigalNerd',
    githubRepo: 'react-boilerplate'
  },
};

const questions = [
  {
    name: 'templates',
    type: 'list',
    message: 'What boilerplate would you like to instantiate?',
    choices: Object.keys(boilerplates),
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
    installBoilerplate(answers['templates']);
  });