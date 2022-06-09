/** Binary to string */

/**
 * This is a simple function that converts a string of binary numbers
 * to their string equivalent
 */

function binaryToString(str) {
    const words = str.split(' ') 
    return words.map(word => String.fromCharCode(parseInt(word, 2))).join("")
}
  
console.log(binaryToString("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))
  
  
  /** Thought Process */
  
  // Split the string of binary numbers by spaces
  
  // Convert each group of the splitted number string to numbers (integers) whilst specifying their base
  
  // Convert each of the group of numbers to their inividual character code 
  
  // Join back the resulting array using no space and return the result