#!/usr/bin/env node
const fs = require('fs');

const isDirectory = (directoryPath) => {
  return fs.statSync(directoryPath).isDirectory();
};

module.exports = {
  isDirectory,
};
