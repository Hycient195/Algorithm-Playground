/**
 * This is a simple program that creates a constructor whoose parameters
 * can only be acessed and modified using its own methods
 * 
 * The tricky part is actually getting and setting the "fullName" property
 * Which is actually a combination of the firstName and lastName properties
 */

const Person = function(firstAndLast) {

    let internalFirstName = firstAndLast.split(" ")[0];
    let internalLastName = firstAndLast.split(" ")[1];
    
    this.getFullName = function() {
      return internalFirstName + " " + internalLastName;
    };
  
    this.getFirstName = function (){
      return internalFirstName;
    }
  
    this.getLastName = function (){
      return internalLastName;
    }
  
    this.setFullName = function (fullName){
      internalFirstName = fullName.split(" ")[0]
      internalLastName = fullName.split(" ")[1]
    }
  
    this.setFirstName = function (firstName){
      internalFirstName = firstName
    }
  
    this.setLastName = function (lastName){
      internalLastName = lastName
    }
  
  };
  
  const bob = new Person('Bob Ross');
  bob.setLastName("mielow")
  bob.setFullName('James Heskin')
  console.log(bob.getFullName())
  console.log(bob.getLastName())
  
  bob.getFullName();