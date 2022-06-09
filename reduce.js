/** Working with the array "reduce()" method */
// Consider the following example below


const arr = [7, 13, 3, 2, 5, 8]; // Common Array
/**<==============================================================> */



console.log("\n \n <============== Using regular iteration ================> \n")

let state = {
    accumulator : [],
    currentVal : [],
    index : [],
    originalArr : []
}

let count = 0;

for(let each of arr){

    state.accumulator.push(count)
    state.currentVal.push(each)
    state.index.push(arr.indexOf(each))
    state.originalArr = arr

}
console.table(state)



console.log("\n \n <============== Using arr.reduce() method ================> \n")

let status = {
    accumulator : [],
    currentVal : [],
    index : [],
    originalArr : []
}
const result = arr.reduce((accumulator, currentVal, index, originalArr)=>{

    status.accumulator.push(accumulator)
    status.currentVal.push(currentVal)
    status.index.push(index)
    status.originalArr = originalArr

}, 0)

console.table(status)


/** <================================================= Notes ======================================================> */
/**
 *  "Accumulator" can be compared to "count". Its value is the second argument to the reduce function (after 
 *      the callback function) or the first element of of the array if the second argument to reduce is not passed.
 *      The Accumulator can be initialized to anything ranging from 0, an empty array, empty object or any other variable
 * 
 *  "CurrentVal" is the current item being iterated over at each point in time
 * 
 *  "Index" is the index value of the currentVal at each point in time.
 * 
 *  "OriginalArr" returns the original array on which the reduce method was called
 * 
 * Note: Always remeber to by default to set the default value of "accumulator" to 0 (zero)
 *  by passing its value as the second argument to the reduce medtod.
 */