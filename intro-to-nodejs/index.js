#!/usr/bin/env node

//console.log(`Node.js executable path: ${process.execPath}`);

// This is a simple Node.js script that demonstrates the use of synchronous and asynchronous functions.

const getUserSync = (userId) => {
  const users = {
    1: {name: 'John', age: 35},
    2: {name: 'Jane', age: 28},
    3: {name: 'Doe', age: 22},
  };
  return users[userId]
}

const user = getUserSync(1);

const getUserAsync = ( userId, callback) => {
  const users = {
    1: {name: 'John', age: 35},
    2: {name: 'Jane', age: 28},
    3: {name: 'Doe', age: 22},
  };
  setTimeout(() => {
    callback(users[userId]);
  }, 1000);
}

getUserAsync(1, (user) => {
  console.log(user);
});