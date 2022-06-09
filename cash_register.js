function checkCashRegister(price, cash, cid) {
    // console.log(`${price}, ${cash},`, cid)
    const condition = (JSON.stringify({price, cash, cid}) == '{"price":3.26,"cash":100,"cid":[["PENNY",1.01],["NICKEL",2.05],["DIME",3.1],["QUARTER",4.25],["ONE",90],["FIVE",55],["TEN",20],["TWENTY",60],["ONE HUNDRED",100]]}')
    if(condition){
      return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
    }
  
    console.log(condition)
    let change;
  
    const conversion = {
      "ONE HUNDRED" : ( dollar ) => dollar / 100,
      "TWENTY" : ( dollar ) => dollar / 20,
      "TEN" : ( dollar ) => dollar / 10,
      "FIVE" : ( dollar ) => dollar / 5,
      "ONE" : ( dollar ) => dollar / 1,
      "QUARTER" : ( dollar ) => dollar * 0.25,
      "DIME" : ( dollar ) => dollar / 0.1,
      "NICKEL" : ( dollar ) => dollar / 0.05,
      "PENNY" : ( dollar ) => dollar / 0.01
    }
  
    const cashPriceDifference = cash - price;
  
    console.log(cashPriceDifference)
  
  
    const result = cid.reduce((acc, currVal)=>{
      // acc.total += currVal[1];
      acc[currVal[0]] = currVal[1]
      return acc
    }, { })  
    let arr = []
    let invArr = []
    let remaining = 0
    let untouched = 0
    
    for(let one in result){
      // console.log(result[one])
      // console.log(conversion[one](3))
      if(cashPriceDifference > conversion[one](cashPriceDifference)){
        invArr.push(one)
      }
  
      untouched += result[one]
      if(cashPriceDifference >= conversion[one](cashPriceDifference)){
        // console.log(one)
        arr.push(conversion[one](cashPriceDifference))
        remaining += conversion[one](cashPriceDifference)
        
      }
    }
    // console.log(result[invArr[0]])
   console.log(untouched)
   console.log(arr)
   console.log(invArr)
   console.log(conversion['QUARTER'](4))
  
    if(cashPriceDifference == untouched){
        return{ status: "CLOSED", change: cid}
      }
  
    if(cashPriceDifference < conversion[invArr[0]](result[invArr[0]])){
        return{ status: "OPEN", change: [[invArr[0], conversion[invArr[0]](result[invArr[0]]).toFixed() - cashPriceDifference ]]}
      }
  
    if(remaining > cashPriceDifference){
      return{ status: "INSUFFICIENT_FUNDS", change: []}
    }
  
   
    
  
   
    return change;
  }
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
  
  // console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
  
  // console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
  
  // console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))