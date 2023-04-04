/*Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

*/

function diagonalDifference(arr: number[][]): number {
  // Write your code here

  let [primaryDiagonalSum, secondaryDiagonalSum] = [0, 0];
  const arrayLength = arr.length - 1;
  arr.forEach((currentArray, index) => {
    primaryDiagonalSum += currentArray[index];
    secondaryDiagonalSum += currentArray[arrayLength - index];
  });

  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

const difference = diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
console.log("🚀 ~ file: diagonalSum.ts:46 ~ difference is:", difference);
