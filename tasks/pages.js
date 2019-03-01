'use strict';
const shell = require('shelljs');

const copyPaths = [
  { from: './src/pages/*', to: './dist' },
];

copyPaths.forEach((path) => {
  console.log(`\nCopying ${path.from} ---> ${path.to}`);
  shell.mkdir('-p', path.to);
  shell.cp('-r', path.from, path.to);
});
