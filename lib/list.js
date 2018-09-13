#!/usr/bin/env node
const fs = require('fs');
const { isDirectory } = require('./helper');

const createFilesListSync = (path, filesToCopy = [], foldersToMake = []) => {
  
  const files = fs.readdirSync(path.from);
  
  files.forEach((file) => {
    
    const fileSource = `${ path.from }/${ file }`;
    const fileDestination = fileSource.replace(`${ path.from }/`, path.to);
    
    if (isDirectory(fileSource)) {
      
      createFilesListSync({
        from: fileSource,
        to: `${ fileDestination }/`,
      }, filesToCopy, foldersToMake);

      foldersToMake.push(fileDestination);
      
    } else {
      
      filesToCopy.push({
        from: fileSource,
        to: fileDestination,
      });
      
    }
    
  });
  
  return {
    filesToCopy,
    foldersToMake,
  };
  
};

const createFilesList = (path) => {
  
  return new Promise((resolve) => {
    const list = createFilesListSync(path);
    if (Array.isArray(list.filesToCopy) && Array.isArray(list.foldersToMake)) {
      resolve(list);
    }
  });
  
};

module.exports = {
  createFilesListSync,
  createFilesList,
};
