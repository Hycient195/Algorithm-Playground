function convertToRoman(num) {

    if(num >= 4000){
      console.log('Input Above Range')
      return 'Input Above Range'
    }
  
    let holder = '';
    let binaryNum = num;
  
    while(binaryNum >= 1000){
      holder += 'M';
      binaryNum -= 1000;
    }
  
    while(binaryNum >= 900){
      holder += 'CM';
      binaryNum -= 900;
    }
  
    while(binaryNum >= 500){
      holder += 'D';
      binaryNum -= 500;
    }
  
    while(binaryNum >= 400){
      holder += 'CD';
      binaryNum -= 400;
    }
  
    while(binaryNum >= 100){
      holder += 'C';
      binaryNum -= 100;
    }
  
    while(binaryNum >= 90){
      holder += 'XC';
      binaryNum -= 90;
    }
  
    while(binaryNum >= 50){
      holder += 'L';
      binaryNum -= 50;
    }
  
    while(binaryNum >= 40){
      holder += 'XL';
      binaryNum -= 40;
    }
  
    while(binaryNum >= 10){
      holder += 'X';
      binaryNum -= 10;
    }
  
    while(binaryNum == 9){
      holder += 'IX';
      binaryNum -= 9
    }
  
    while(binaryNum >= 5){
      holder += 'V';
      binaryNum -= 5;
    }
  
    while(binaryNum == 4){
      holder += "IV";
      binaryNum -= 4;
    }
    console.log(binaryNum)
  
    while(binaryNum >= 1){
      holder += "I";
      binaryNum -= 1;
    }
  
    console.log(holder)
    return holder;
}
  
// convertToRoman(36);
convertToRoman(2000)


/** Number Break Points */
// 1	5	10	50	100	500	1000
// I  V  X   L   C   D    M
  