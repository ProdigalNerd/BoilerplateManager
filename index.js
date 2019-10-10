#!/usr/bin/env node

// Grab provided args.

const [,, ...args] = process.argv;

console.log(args);

if (args[0] === 'init') {
  require('./initBoilerplate.js');
}
else if (args[0] === 'add') {
  require('./addBoilerplate.js');
}