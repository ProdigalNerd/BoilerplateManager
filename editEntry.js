#!/usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer');

const bpData = fs.readFileSync('boilerplates.json');
const boilerplates = JSON.parse(bpData);

const choices = Object.keys(boilerplates);
choices.push('none');
