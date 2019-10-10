#!/usr/bin/env node

// Grab provided args.

const [,, ...args] = process.argv;

const method = args[0];

if (method === 'init') {
  require('./initBoilerplate.js');
}
else if (method === 'add') {
  require('./addBoilerplate.js');
}
else if (method === 'clear') {
  require('./clearData.js');
}