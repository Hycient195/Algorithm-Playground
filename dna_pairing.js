/**DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 */

function pairElement(str) {
    const splStr = [...str]
    const arr = []
  
    splStr.map(each =>{
      each == "G" ?
        arr.push([each, "C"]) :
      each == "C" ?
        arr.push([each, "G"]) :
      each == "T" ?
        arr.push([each, "A"]) :
      each == "A" ?
        arr.push([each, "T"]) :
      ""
    })
    console.log(arr)
    return arr;
  }
  
  pairElement("GCG");
  pairElement("TTGAG");
  pairElement("CTCTA");