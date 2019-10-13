#!/usr/bin/env node

// Grab provided args.

const [,, ...args] = process.argv;

const method = args[0];

switch(method) {
  case 'init':
    require('./initBoilerplate.js');
    break;
  case 'add':
    require('./addBoilerplate.js');
    break;
  case 'clear':
    require('./clearData.js');
    break;
  case 'edit':
    require('./editEntry.js');
    break;
  case 'delete':
    require('./deleteEntry.js');
    break;
}