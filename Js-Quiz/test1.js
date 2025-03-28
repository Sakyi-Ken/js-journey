// Project find the missing number in the array.
// Concepts covered: Array, Loops, Conditional Statements, Arithmetic operations.
// Task: Given an array containing n unique numbers from 1 to n+1, find the missing number in the array.

// Input: [1, 2, 3, 4, 6, 7, 8]
// Output: 5

// Input: [1, 2, 3, 4, 5, 6, 7, 8, 10]
// Output: 9


// Solution 1: Using the formula for the sum of n natural numbers.
// Time Complexity: O(n)
// Space Complexity: O(1)
//Steps
//1. Calculate the sum of n natural numbers using the formula (n * (n + 1)) / 2.
//2. Calculate the sum of the given array.
//3. Subtract the sum of the array from the sum of n natural numbers to find the missing number.

function findMissingNumber(arr) {
  let n = arr.length + 1;
  let total = (n * (n + 1)) / 2;
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return total - sum;
}

console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8])); // 5
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10])); // 9
console.log(findMissingNumber([2, 3, 4, 5, 6, 7, 8])); // 1

// function findMissingNumber(arr) {
//   let n = arr.length + 1;
//   let x1 = arr[0];
//   let x2 = 1;

//   for (let i = 1; i < arr.length; i++) {
//     x1 = x1 ^ arr[i];
//   }

//   for (let i = 2; i <= n; i++) {
//     x2 = x2 ^ i;
//   }

//   return x1 ^ x2;
// }

