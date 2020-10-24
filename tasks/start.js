const shell = require('shelljs');
const map = require('lodash/map');
const runAll = require('npm-run-all');

console.log('Building kaseybon.com');

const tasks = {
  production: ['copy', 'sass', 'scripts', 'pages'],
  development: ['copy', 'sass', 'scripts', 'pages', 'server', 'watch']
};

function parallelTasks(env) {
  const list = map(tasks[env], task => `${task}`);

  return `${list.join(' ')}`;
}

if (process.env.NODE_ENV === 'production') {
  shell.exec(`npm-run-all -p ${parallelTasks('production')}`);
} else {
  shell.exec(`npm-run-all -p ${parallelTasks('development')}`);
}
