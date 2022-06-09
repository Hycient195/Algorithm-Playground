/** Basic Promise Syntax */
const myPromist = new Promise(( resolve, reject)=>{
    if(2 < 3){
        resolve(console.log('This is the resolve statement'))
    }else{
        reject(console.log('The promise was rejected'))
    }
    
})

/** Going more in-depth a bit */
const secondPromise = new Promise(( resolve, reject )=>{
    const status = true;

    if(status){
        resolve(
            secondPromise.then( result => result)
        )
    }else{
        reject(
            secondPromise.catch( error => error)
        )
    }
})