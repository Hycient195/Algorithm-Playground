/** Basic practice of recursion */
function recurse (n){
    if(n <= 0){
        return [];
    }else{
        const data = recurse(n - 1) 
        data.push(n)
        console.log(`Executed ${n} times`)
        return data;
    }
}
// console.log(recurse(20))

const recurse2 = (n) =>{
    if( n <= 0){
        return []
    }else{
        const data = recurse2(n - 1)
        console.log(`Using recursion without returning an array ${n} times`)
        debugger;
    }
}
// recurse2(10)

// y = i - ((f^n * (((s*i)/f) + (20/f))^w)  /  20^n)

let a = 10;
let b = 20;
let c = 30;

a = b = c;

console.log(a)
