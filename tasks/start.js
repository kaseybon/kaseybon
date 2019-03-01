const shell = require('shelljs');
const map = require('lodash/map');
const runAll = require('npm-run-all');

console.log(`Starting ${process.env.NODE_ENV || 'development'}`);

const tasks = {
  production: ['copy', 'sass', 'pages'],
  development: ['copy', 'sass', 'pages', 'server', 'watch']
};

function parallelTasks(env) {
  const list = map(tasks[env], task => `${task}`);

  return `${list.join(' ')}`;
}

if (process.env.NODE_ENV === 'production') {
  shell.exec(`npm-run-all -p ${parallelTasks('production')}`);
} else {
  shell.exec(`npm-run-all  -p ${parallelTasks('development')}`);
}
