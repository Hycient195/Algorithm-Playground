/** This is a simple program that converts a single english word to Pig Latin */

function translatePigLatin(str) {
    const regex = /[a,e,i,o,u]/
    const vowel = str.match(regex)
    const strArray = str.split("")
  
  
    if(regex.test(str[0]) === true){
      console.log("First Block")
      const indexOfVowel = str.indexOf(vowel[0])
      let spliceConsonant = strArray.splice(0, indexOfVowel)
      console.log(spliceConsonant)
      strArray.push(...spliceConsonant)
      console.log(regex.test(str[0]))
      strArray.push("w","a","y")
      const joinedStr = strArray.join("")
      console.log(joinedStr)
      return joinedStr;
    }
    else if(regex.test(str) === false){
        console.log("Second block")
        strArray.push("a","y")
        const joinedStr = strArray.join("")
        console.log(joinedStr)
        return joinedStr;
    }
    else if(regex.test(str[0]) === false){
      console.log("Third Block")
      const indexOfVowel = str.indexOf(vowel[0])
      let spliceConsonant = strArray.splice(0, indexOfVowel)
      console.log(spliceConsonant)
      strArray.push(...spliceConsonant)
      strArray.push("a","y")
      const joinedStr = strArray.join("")
      console.log(joinedStr)
      return joinedStr;
    }
  
}
  
  // translatePigLatin("consonant");
  // translatePigLatin("glove")
  // translatePigLatin("algorithm")
  // translatePigLatin("rhythm")
  // translatePigLatin("eight")