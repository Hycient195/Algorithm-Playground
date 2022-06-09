function diagonalDifference(arr) {
  let rightDiag = 0;
  let leftDiag = 0;
  
  for(let i = 0; i < arr.length; i++){
    rightDiag += arr[i][i]
    leftDiag += arr[i][(arr.length - 1) - i]
  }
  return Math.abs(leftDiag - rightDiag);

}

console.log(diagonalDifference(
  [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ]
))