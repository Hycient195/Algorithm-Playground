// const arr = [1,2,3,4,5];

// const Factorializer = (arr) =>{
//   let tempVal = arr[0];
//   for(let i = 0; i < arr.length -1; i++){
//     tempVal *= arr[i + 1];
//   }
//   return tempVal;
// }

// console.log(Factorializer(arr));

// function lonelyinteger(a) {
//   // Write your code here
//   // console.log(a)
//   const arr = []
//   let val = 0;
//  const min = Math.min(...a)
//  const max = Math.max(...a)
 
//  for(let i = min; i <= max+1; i++ ){
//      arr.push(0)
//  }
//  for(let j = 0; j < a.length; j++){
//      arr[a[j]] += 1;
//  }    
//  for(let k = 0; k < arr.length; k++){
//      if(arr[k] == 1){
//          val = k;
//      }
//  }
//  console.log(arr)
//  return val;
// }

const arr = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108]
]

function flippingMatrix(arr){
  
  const matrix = [...arr]
    for(let i = 0; i < matrix.lenth; i++){
        for(let j = 0; j < matrix.lenth; j++){
            // matrix[i][2] = matrix[i + 1][2]
            matrix[0][0] = 1231;
        }
    }
    console.log(matrix)
}

flippingMatrix(arr)