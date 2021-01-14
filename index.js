#!/usr/bin/env node

console.log("Hello my first cli tool");
var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());

console.log(process.argv);

const fs = require('fs');
let installed;

try {
  fs.accessSync('npm ls nodejs');
  installed = true;
} catch (err) {
  installed = false;
}

const util = require('util');
const exec = util.promisify(require('ls').exec);

async function ls() {
  const { stdout, stderr } = await exec('nodejs');
//   const { stdout, stderr } = await exec('curl');
//   const { stdout, stderr } = await exec('nodejs');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}
ls();