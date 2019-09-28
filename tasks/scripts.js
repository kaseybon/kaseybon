'use strict';
const shell = require('shelljs');

const copyPaths = [
  { from: './src/js/*', to: './dist/js' },
];

copyPaths.forEach((path) => {
  console.log(`\nCopying ${path.from} ---> ${path.to}`);
  shell.mkdir('-p', path.to);
  shell.cp('-r', path.from, path.to);
});
