/** This is a program that takes a string (first argument), and replaces
 * a word in the string (second argument), with another word (third argument)
 */

/** Creating the function */
function myReplacer(str, before, after) {
    /** Split the input string into an array of words */
    const strArray = str.split(" ")

    /** Initializing a regular expression */
    const regex = /[A-Z]/g
  
  
    /** Carrying out a set of operations if the first letter of the word to be replaced in upper case */
    if(regex.test(before[0]) === true){
        /** Finding the index of the word to be replaced */
        const replaceIndex = strArray.indexOf(before)
        /** Spreading the replacing word into an array of characters */
        let afterSpread = [...after]
        /** Converting the first letter of the replacing word to uppercase */
        afterSpread[0] = afterSpread[0].toUpperCase()
        /** Joining back the array of characters into a word */
        const joinedAfter = afterSpread.join("")
        /** Replacing the word to be replaced with the replacing word */
        strArray.splice(replaceIndex, 1, joinedAfter)
        /** Assembling the array of words back into a string */
        const joinedStr = strArray.join(" ")
        console.log(joinedStr)
        /** Returning the result */
        return joinedStr;

    }/** Carrying out a set of operations if the first letter of the word to be replaced in lower case */

        /** Finding the index of the word to be replaced */
        const replaceIndex = strArray.indexOf(before)
        /** Spreading the replacing word into an array of characters */
        let afterSpread = [...after]
        /** Converting the first letter of the replacing word to uppercase */
        afterSpread[0] = afterSpread[0].toLowerCase()
        /** Joining back the array of characters into a word */
        const joinedAfter = afterSpread.join("")
        /** Replacing the word to be replaced with the replacing word */
        strArray.splice(replaceIndex, 1, joinedAfter)
        /** Assembling the array of words back into a string */
        const joinedStr = strArray.join(" ")
        console.log(joinedStr)
        /** Returning the result */
        return joinedStr;
  
  }
  /** Calling the function with different string arguments */
  myReplacer("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  myReplacer("He is Sleeping on the couch", "Sleeping", "sitting")