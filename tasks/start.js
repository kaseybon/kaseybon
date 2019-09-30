const shell = require('shelljs');
const map = require('lodash/map');
const runAll = require('npm-run-all');

console.log('Building kaseybon.com');

const tasks = {
  development: ['copy', 'sass', 'scripts', 'pages', 'server', 'watch']
};

function parallelTasks(env) {
  const list = map(tasks[env], task => `${task}`);

  return `${list.join(' ')}`;
}

shell.exec(`npm-run-all  -p ${parallelTasks('development')}`);
