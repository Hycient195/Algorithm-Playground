/** Functional programming is implemented by modularizing each piece
 * of the algorithm as a separate function
 */

/** Removing all non alphanumeric characters and spaces */
function removeNonAlphaNumericAndJoin(arg){
    const regex = /[^\W]/ig
    return arg.match(regex).join("")
}

/** The palindrome checker function */
function palindrome(str){
    /** Variable to hold the reversed version of the input argument */
    let strReversed = ''

    /** Reversing the input argument */
    for(let i = str.length - 1; i >= 0; i--){
        strReversed += str[i]
    }

    /** Performing the check between the processed input string, and the processed reversed string */
    return removeNonAlphaNumericAndJoin(strReversed).toLowerCase() === removeNonAlphaNumericAndJoin(str).toLowerCase()
}


/** Testing a few inputs */
console.log(palindrome('eye'))
console.log(palindrome('result'))

