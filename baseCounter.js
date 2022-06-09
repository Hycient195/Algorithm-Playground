let base = 2
let denaryNum = 0

for(let i=0; i<base; i++){
	for( let j=0; j<base; j++){
		for( let k=0; k<base; k++){
			for(let l=0; l<base; l++){
				for(let m=0; m<base; m++){
						console.log(`${i}${j}${k}${l}${m} is ${denaryNum} in base ${base}`)
						denaryNum++
				}
			}
		}
	}
}

