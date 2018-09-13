#!/usr/bin/env node
const fs = require('fs');

const makeDirectorySync = (path, callback) => {

  fs.mkdir(path, (err) => {
    if (err) console.log(err);
    else {
      if (typeof callback === 'function') {
        callback();
      }
    }
  });

};

const makeDirectory = (path) => {

  return new Promise((resolve) => {
    makeDirectorySync(path, () => {
      setTimeout(resolve, 100);
    });
  });

};

const makeDirectoriesSync = (foldersToMake, callback) => {
  
  foldersToMake.sort((a, b) => {
    return a.split('/').length - b.split('/').length;
  });
  
  const recur = async (folders) => {

    if (folders.length === 0) {
      if (typeof callback === 'function') {
        callback();
      }
      return true;
    }

    const folder = folders.shift();

    await makeDirectory(folder);

    return recur(folders);
    
  };

  return recur(foldersToMake);

};

const makeDirectories = (folders) => {
  
  return new Promise((resolve) => {
    makeDirectoriesSync(folders, resolve);
  });

};

module.exports = {
  makeDirectorySync,
  makeDirectory,
  makeDirectoriesSync,
  makeDirectories,
};
