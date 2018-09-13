#!/usr/bin/env node
const fs = require('fs');
const { createFilesList } = require('./list');
const { makeDirectories } = require('./mkdir');
const {
  FgWhite,
  FgLightGreen,
  FgCyan,
  Reset,
} = require('./escape');

const copyFileSync = (file, callback) => {
          
  fs.copyFile(file.from, file.to, (err) => {
    if (err) console.error(err);
    else {
      if (typeof callback === 'function') {
        callback();
      }
    }
  });

};

const copyFile = (file) => {

  return new Promise((resolve) => {
    copyFileSync(file, () => {
      setTimeout(resolve, 100);
    });
  });

};

const copyAllFilesSync = async (options, callback) => {
  if (!options) return undefined;
  if (options.from === undefined || options.to === undefined) return undefined;

  console.log(`  ${ FgLightGreen }\u2714${ Reset }  ${ FgLightGreen }${ options.title || '' }${ Reset }`);

  const {
    filesToCopy,
    foldersToMake,
  } = await createFilesList(options);
  
  await makeDirectories(foldersToMake);

  const recur = async (filesList) => {
    
    if (filesList.length === 0) {
      console.log('');
      if (typeof callback === 'function') {
        callback();
      }
      return true;
    }

    const file = filesList.shift();

    console.log(`    -  ${ file.to }`);

    await copyFile(file);

    console.log(`\x1b[1A\x1b[K     ${ FgCyan }\u2714${ Reset }  ${ FgWhite }${ file.to }${ Reset }`);

    return recur(filesList);
  };

  return recur(filesToCopy);

};

const copyAllFiles = (options) => {
  
  return new Promise((resolve) => {
    copyAllFilesSync(options, resolve);
  });
  
};

module.exports = {
  copyFileSync,
  copyFile,
  copyAllFilesSync,
  copyAllFiles,
};
