const sort = (arr) =>{
  const arrCopy = [...arr];
  let tempVal = 0;
  
  for(let i = 0; i < arrCopy.length; i++){
    for(let j = 0; j < arrCopy.length; j++){
      if(arrCopy[j] > arrCopy[j + 1]){
        tempVal = arrCopy[j];
        arrCopy[j] = arrCopy[j + 1];
        arrCopy[j + 1] = tempVal;
      }
    }
  };
  console.log(arrCopy);
}

sort([2,4,1,8,5,6,9,30,3,2])