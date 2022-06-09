/** Fizzbuzz */
/* This is a simple algorithmic program that prints the word "fizz" for every
    number divisible by 3 in a given range, "buzz" for every number divisible 
    by 5 in a given range, and "fizzbuzz" for numbers within the given range
    that are divisible by both 3 and 5
 */

for(let i = 1; i <= 20; i++){
  if(i % 3 == 0 && i % 5 == 0){
    console.log('fizzbuzz\n')
  }
  else if(i % 3 == 0){
    console.log("fizz\n")
  }
  else if(i % 5 == 0){
    console.log("buzz\n")
  }
  else{
    console.log(`${i}\n`)
  }
}
