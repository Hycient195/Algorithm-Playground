/** Usin Character classes in regular expressions */

/** Character classes are specified by inputting the individual characters to be searches
 * in the string in-between squaare brackets
 */

/** The "i" flag is used to ignore case sensitivity 
 * The "g" flag is used to to specify that multiple instances of the regular
 * expression should be returned
 * */ 

/** The variable "result" would return in an array the number of times
 * The letters "i" "n" "k" and "z" in the sentece "sentece" 
 */

const sentence = "A quick brown fox jumps over the lazy dog"
const regex = /[inkz]/ig
result = sentence.match(regex)
// console.log(result)


const sentence1 = "gentle gentle gentle jack joe joe joe"
const regex2 = /(\w+) \1 \1/
const result2 = regex2.test(sentence1)
const result2a = sentence1.match(regex2)
console.log(result2, result2a)




/**<================================================================> */

function urlSlug(title) {
    const lowerCaseStr = title.toLowerCase();
    // console.log(lowerCaseStr)
    const splittedStr = lowerCaseStr.trim().split(/\s{1,}/ig)
    // console.log(splittedStr)
    const joinedArr = splittedStr.join("-")
    console.log(joinedArr)
  
    return joinedArr;
    
  }

  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
  urlSlug(" Winter Is  Coming")