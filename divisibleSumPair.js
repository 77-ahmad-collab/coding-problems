// Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .
// Function Description

// Complete the divisibleSumPairs function in the editor below.

// divisibleSumPairs has the following parameter(s):

// int n: the length of array
// int ar[n]: an array of integers
// int k: the integer divisor
// Returns
// - int: the number of pairs

// Input Format

// The first line contains  space-separated integers,  and .
// The second line contains  space-separated integers, each a value of .

// Sample Input

// STDIN           Function
// -----           --------
// 6 3             n = 6, k = 3
// 1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]

// Sample Output

//  5

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let validPairs = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        validPairs += 1;
      }
    }
  }
  return validPairs;
}
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
