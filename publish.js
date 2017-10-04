const pkg = require('./package.json');
const fs = require('fs');
const { exec } = require('child_process');
const isPack = process.argv[2] === 'pack';

/* Edition of the original package.json */
delete pkg.scripts;
pkg.main = './src/index.js';
pkg.typings = './src/index.d.ts';

/* Write it inside ./dist folder */
fs.writeFileSync('./dist/package.json', JSON.stringify(pkg, null, 4));

/* Publish with npm */
const command = 'npm ' + (isPack ? 'pack' : 'publish');
exec(command, {cwd: __dirname + '/dist/'}, function(error, stdout, stderr){
  if (error) {
    throw error;
  }

  console.log(stdout);
  console.log(stderr);
});
