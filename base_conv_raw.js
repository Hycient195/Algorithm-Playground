const toDec = (arr, baseFrom) =>{
  let n = 0;
  for(let i = 0; i < arr.length; i ++){
    n = baseFrom * n + arr[i]
  }
  return n;
  // console.log(n)
}


const fromBase = (number, baseTo) =>{
  let result = [];
  let numcopy = number;
  // let result = 0;

  console.log(numcopy > baseTo)
  while(numcopy > 1){
    result.unshift(Math.floor(numcopy % baseTo))
    numcopy = numcopy / baseTo;
  }
  console.log(number % baseTo)

  console.log(result)
  return result.join('');
}

// console.log(fromBase(13, 8))




toDec([1,1,2,0], 3)

const converter = (digits, baseFrom, baseTo) =>{
  return fromBase(toDec(digits, baseFrom), baseTo)
}

console.log(converter([1,0,1,1], 4, 6))