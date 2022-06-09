                        /** Currying */
    /** Consider the following examples below. */




/**====================== Regular Function ======================> */

const regular = (x, y, z) =>{
    return x + y + z
}

const res = regular(23, 45, 56)

console.log(res)




/** <====================== Curried Function ====================> */

function curry(x) {
    return function(y) {
        return function(z){
            return x + y + z
        };
    }
}

const curried = curry(23)(34)(12)

console.log(curried)


/**<================ Short Hand Curried Function =================> */

const curryShortHand = x => y => z => x + y + z

const result = curryShortHand(23)(2)(5)

console.log(result)


/**<========================= Notes =============================> */

/**
 * Currying is the process of restructuring a function that receives
 * several arguments, so that it becomes many functions that each receives a single argument
 * 
 * Currying is the process of converting a function of N arities (arguments) to N functions of 1 arity (arguments).
	=> The arity of a function is the number of arguments it requires.

 * In the concept and process of currying, a function is restructured so that it takes one (1) argument, and then returns another function that takes the next aregument and so on.
 */



/**<================== Advantages of Currying ====================> */
// consider the example below

const add = x => y => z => x + y + z

const addedTwo = add(2)

const sumPlusTwo = addedTwo(3)(3)

console.log(sumPlusTwo) // result (3 + 3) + 2 = 8

/**The main benefit of currying is when you need to use the same
 *  call with some of the same parameters a lot i.e it helps to avoid
 *  passing the same variable again and again. In these situations,
 *  currying becomes a good technique to use. 
*/


/**<================== Partial Application ======================> */

function impartial(x, y, z) {
    return x + y + z;
  }
  
const partialFn = impartial.bind(this, 1, 2);
const part = partialFn(10); // 13
console.log(part)

/**partial application can be described as applying a few arguments
 *  to a function at a time and returning another function that is
 *  applied to more arguments. */