/** A Program that converts a number in a given base to a target base */

function baseConverter(num, sourceBase, targetBase){
  let stringNum = String(num)
  /** The "parseInt()" function takes a number and its base as
   * input arguments, and returns back its base 10 equivalent */
  const result = parseInt(num, sourceBase);

  /** The ".toString()" method is called on the number returned
   * from the parseInt() function and converts the number to
   * the base of the number provided as input argument to the 
   * to the .toString() method */
  const finalResult = result.toString(targetBase);

  /** Variables to hold error message if any error occours */
  let errorMessage;
  let errorArr = [];

  /** Testing if any digit in the number provided is greater than the source base 
   * (that is if "num" is of base "sourceBase")*/
  for(let i = 0; i < stringNum.length; i++){
    if(parseInt(parseInt(stringNum[i], sourceBase)) < sourceBase){
      errorArr.push(Number(stringNum[i]) < sourceBase)
    }
  }
  
  /** Returning an error message if the number is invalid for the source base specified. */
  if(errorArr.length !== stringNum.length ){
    errorMessage = `${num} is not a number in base ${sourceBase}`;
    console.log(errorMessage);
    return errorMessage;
  }
  /** If no error, the final result is returned. */
  else{
    /** Printing the final result to the console */
    console.log(finalResult);
    
    /** Returning the final result from the function */
    return finalResult;
  }
}

/** Testing the function with sets of different values */
baseConverter(12301, 2, 8)
baseConverter('a2', 16, 10);
baseConverter(110101, 2, 10);
baseConverter('ba7', 16, 2);
baseConverter(16, 10, 8);

