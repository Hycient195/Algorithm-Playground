/**
 * Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
 */

function orbitalPeriod(arr) {
  
    /** Initialization of an array to hold the values of the objects to be created. */
    const newArr = []
  
    /** The actual function that takes the average altitude and converts it to orbital period */
    function getOrbitalPeriod(avgAlt){
      const GM = 398600.4418;
      const earthRadius = 6367.4447;
      const orbitalRadius = earthRadius + avgAlt
  
      /** Formula for calculation in code */
      return Math.round(
        2 * Math.PI * Math.sqrt(((orbitalRadius * orbitalRadius) * orbitalRadius) / GM)
      )
    }
  
    /** Iterating through the given array to obtain their values of average height, calculate their orbital height, and store the values in the newly created object */
    for(let i = 0; i < arr.length; i++){
      let tempVal = {
        name: arr[i]['name'],
        orbitalPeriod: getOrbitalPeriod(arr[i]['avgAlt'])
      }
  
      /** Inserting the newly created objects into the declared empty array above. */
      newArr.push(tempVal)
  
    }
    console.log(newArr)
    console.log(getOrbitalPeriod(35873.5553))
    return newArr;
  }
  
  /** Testing the function with an array with a single object, containing its name and average height value. */
  orbitalPeriod([{name : "manjaro", avgAlt : 35873.5553}]);
  
                /** Thought Process */
  
  // Initializing a function that takes the average atlitude value and returns the value of the orbital period in the steps below
  // Define the constants for the standard gravitational constant, and the earth's radius. 
  // Obtain the orbital radius by adding the value of earth's radius to the average altitude, and inputting all the values in in the ralation below
  
  // Loop through each object in the input array, and for each object, create a new object whoose name key and value is same with its name, and the value of its orbitalPeriod property is the result of the "getOrbitalPeriod()" function
  
  // For each object in the input array, push this new object into a new array, and then return the new array.