#!/usr/bin/env node
// This script demonstrates how to create a simple command-line application using Node.js.

import {count} from './utils/utils.js'; // ES6 module syntax
import whatever from './utils/utils.js';
// console.log(count(5)); // 5  
// console.log(whatever.name); // cookies

import fs from 'node: fs';
import _ from 'lodash'; // lodash is a utility library for JavaScript

// console.log(process.argv); // ['node', 'script.js', 'arg1', 'arg2']

const {count} = require('./utils/utils.js'); // CommonJS syntax
 
const note = process.argv[2];
const newNote = {
  content: note,
  id: Date.now()
}

console.log(newNote);