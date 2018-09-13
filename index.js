#!/usr/bin/env node
const copy = require('./lib/copy');
const mkdir = require('./lib/mkdir');
const list = require('./lib/list');

module.exports = {
  ...copy,
  ...mkdir,
  ...list,
};
