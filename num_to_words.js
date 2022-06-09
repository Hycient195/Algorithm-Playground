/** A program that converts a number in the range of 0 to 10000
 * to words, corresponding to english pronunctiation */

function numToWords(num){
  let result = ''; // variable to store the text of the number in words
  let numVar = num; // making a copy of the number variable provided

  /** Iterating through each key-block of number, from the number provided,
   * and appending its corresponding text name to the result variable, whilst
   * subtracting its numerical value from the given number provided */

  while(numVar >= 10000){
    result += 'ten thousand '
    numVar -= 10000;
    numVar <= 99 ? result += 'and ' : null;
  }

  while(numVar >= 9000){
    result += 'nine thousand '
    numVar -= 9000;
    numVar <= 99 ? result += 'and ' : null;
  }

  while(numVar >= 8000){
    result += 'eight thousand '
    numVar -= 8000;
    numVar <= 99 ? result += 'and ' : null;
  }

  while(numVar >= 7000){
    result += 'seven thousand '
    numVar -= 7000;
    numVar <= 99 ? result += 'and ' : null;
  }

  while(numVar >= 6000){
    result += 'six thousand '
    numVar -= 6000;
    numVar <= 99 ? result += 'and ' : null;
  }

  while(numVar >= 5000){
    result += 'five thousand '
    numVar -= 5000;
    numVar <= 99 ? result += 'and ' : null;
  }

  while(numVar >= 4000){
    result += 'four thousand '
    numVar -= 4000;
    numVar <= 99 ? result += 'and ' : null;
  }

  while(numVar >= 3000){
    result += 'three thousand '
    numVar -= 3000;
    numVar <= 99 ? result += 'and ' : null;
  }

  while(numVar >= 2000){
    result += 'two thousand '
    numVar -= 2000;
    numVar <= 99 ? result += 'and ' : null;
  }

  while(numVar >= 1000){
    result += 'one thousand '
    numVar -= 1000;
    numVar <= 99 ? result += 'and ' : null;
  }

  while(numVar >= 900){
    result += 'nine hundred '
    numVar -= 900
    numVar !== 0 ? result += 'and ' : null;
  }

  while(numVar >= 800){
    result += 'eight hundred '
    numVar -= 800;
    numVar !== 0 ? result += 'and ' : null;
  }

  while(numVar >= 700){
    result += 'seven hundred '
    numVar -= 700;
    numVar !== 0 ? result += 'and ' : null;
  }

  while(numVar >= 600){
    result += 'six hundred '
    numVar -= 600;
    numVar !== 0 ? result += 'and ' : null;
  }

  while(numVar >= 500){
    result += 'five hundred '
    numVar -= 500;
    numVar !== 0 ? result += 'and ' : null;
  }

  while(numVar >= 400){
    result += 'four hundred '
    numVar -= 400;
    numVar !== 0 ? result += 'and ' : null;
  }

  while(numVar >= 300){
    result += 'three hundred '
    numVar -= 300;
    numVar !== 0 ? result += 'and ' : null;
  }

  while(numVar >= 200){
    result += 'two hundred '
    numVar -= 200;
    numVar !== 0 ? result += 'and ' : null;
  }

  while(numVar >= 100){
    result += 'one hundred '
    numVar -= 100;
    numVar !== 0 ? result += 'and ' : null;
  }

  while(numVar >= 90){
    result += 'ninety '
    numVar -= 90;
  }

  while(numVar >= 80){
    result += 'eighty '
    numVar -= 80;
  }

  while(numVar >= 70){
    result += 'seventy '
    numVar -= 70;
  }

  while(numVar >= 60){
    result += 'sixty '
    numVar -= 60;
  }

  while(numVar >= 50){
    result += 'fifty '
    numVar -= 50;
  }

  while(numVar >= 40){
    result += 'forty '
    numVar -= 40;
  }

  while(numVar >= 30){
    result += 'thirty '
    numVar -= 30;
  }

  while(numVar >= 20){
    result += 'twenty '
    numVar -= 20;
  }

  while(numVar >= 19){
    result += 'nineteen'
    numVar -= 19;
  }

  while(numVar >= 18){
    result += 'eighteen'
    numVar -= 18;
  }

  while(numVar >= 17){
    result += 'seventeen'
    numVar -= 17;
  }

  while(numVar >= 16){
    result += 'sixteen'
    numVar -= 16;
  }

  while(numVar >= 15){
    result += 'fifteen'
    numVar -= 15;
  }

  while(numVar >= 14){
    result += 'fourteen'
    numVar -= 14;
  }

  while(numVar >= 13){
    result += 'thirteen'
    numVar -= 13;
  }

  while(numVar >= 12){
    result += 'twelve'
    numVar -= 12;
  }

  while(numVar >= 11){
    result += 'eleven'
    numVar -= 11;
  }

  while(numVar >= 10){
    result += 'ten'
    numVar -= 10;
  }

  while(numVar >= 9){
    result += 'nine'
    numVar -= 9;
  }

  while(numVar >= 8){
    result += 'eight'
    numVar -= 8;
  }

  while(numVar >= 7){
    result += 'seven'
    numVar -= 7;
  }

  while(numVar >= 6){
    result += 'six'
    numVar -= 6;
  }

  while(numVar >= 5){
    result += 'five'
    numVar -= 5;
  }

  while(numVar >= 4){
    result += 'four'
    numVar -= 4;
  }

  while(numVar >= 3){
    result += 'three'
    numVar -= 3;
  }

  while(numVar >= 2){
    result += 'two'
    numVar -= 2;
  }

  while(numVar >= 1){
    result += 'one'
    numVar -= 1;
  }

  /** Zero input case */
  num === 0 ? result += 'zero' : null

  /** Printing the result */
  console.log(`${num} is ${result} in words`)  

  /** Returning the result from the function */
  return result;
}


/** Testing a single number */
numToWords(4598)


/** Printing all numbers in words from one to ten thousand */
for(let i = 10000; i >= 1; i--){
  numToWords(i)
}
