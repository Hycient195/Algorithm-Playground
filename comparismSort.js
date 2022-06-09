function countingSort(arr) {
  // Write your code here
  const lenArr = []
  arr.forEach((item)=>{
      lenArr.push(0)
  })
  
  for(let i = 0; i < arr.length; i++){
      lenArr[arr[i]] += 1;
  }
  return lenArr;
}