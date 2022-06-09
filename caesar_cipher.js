function rot13(str) {
    const regex = /[A-Z]/ig
  
    const splString = str.split('')
  
    let charCodeArr = []
  
    for(let i = 0; i < splString.length; i++){
      if(splString[i].match(regex)){
        if(splString[i].charCodeAt() >= 65 && splString[i].charCodeAt() <= 77){
          charCodeArr.push(`${splString[i].charCodeAt()+13}`)
        }else{
          charCodeArr.push(`${splString[i].charCodeAt()-13}`)
        }
        
      }else{
        charCodeArr.push(splString[i])
      }
    }
  
    let rot13String = ''
  
    for(let i = 0; i < charCodeArr.length; i++){
      if(splString[i].match(regex)){
        rot13String += String.fromCharCode(Number(charCodeArr[i]))
      }else{
        rot13String += charCodeArr[i]
      }
    }
  
    console.log(charCodeArr)
    console.log(rot13String)
  
    return rot13String;
  }
  
  // rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!")



                                            /** My Thought Process */

/**
 * I defined a regular expression rule to match only uppercase and lowercase aphabets, rejecting all other characters

I splitted the string argument into an array of characters

I created an empty array.

Iterating though each entity in the array, each element is tested in a "if" statement, against the regex rule specified

If an entity fails, the entity itself is appended to the empty array created

If the entity passes, it is again tested if the character code equivalent of the enetity is within the range of the characters "A" to "N" (character code 65 to 77)

If the entity is within the range of characters "A" to "N", the number 13 is added to its character code value, if not the number 13 is subtracted instead from its character code value to reverse the sequence and the values of both cases are also pushed into the empty array for each entity satisfying their condition.

I then created an empty string

Iterating through each entity in the previously empty array (now filled with values from the previous iteration), each eneity is tested in a "if" statement against the regex rule specified again

If the element passes, it is converted from a number string value into a Number integer, and the value of this integer is now converted back to a character and added to the empty string previously created, at any point the entity being tested is "truthy"

If the element fails the regex rule test (Meaning that is is not an alphanumeric character) it is appended as it is at any point which the eneity being tested is "falsy"
 */