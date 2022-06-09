

// const fib = (n) =>{
//   const fibArr = []
//   if(n <= 2 ) return 1;
//   fibArr.push(fib(n-1) + fib(n-2))
//   return fibArr;
// }

// console.log(fib(6));

const fib = (n) =>{
  let arr = [0,1];
  let some = 0;
  if(n <= 2){
    return null
  }else{
    fib(n-1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  }
  // arr.push(1)
  // for(let i = 0; arr[arr.length - 1] < n; i++){
  //   arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  // }

  // do{
  //   arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  // }while(arr[arr.length - 1] < n)

  // while(arr[arr.length - 1] < n){
    // arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  // }

  // for(let i = 0; i < 500; i++){
    // arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  // }
  // if(arr[arr.length -1] < 50){
    
  //   some ++
   
  // }
  
  // if(arr[arr.length - 1] < n) return "hello"
  // arr.push(fib(arr[arr.length - 1]) + arr(arr[arr.length - 2]))

  console.log(arr)
  return arr;
}

fib(29);
