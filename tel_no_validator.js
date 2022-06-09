/** This is a simple program used to validate the following US telephone
 * numbers below, using several test conditions.
 */

/** Test Conditions */

/**
 *  555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555
 */

    function telephoneCheck(str) {

        const condition1 = (str[3] == '-' && str[7] == '-');
        const condition2 = (str[0] == '(' && str[4] == ')' && str[8] == '-');
        const condition3 = (str[0] == '(' && str[4] == ')' && str[5] == ' ' && str[9] == '-');
        const condition4 = (str[3] == ' ' && str[7] == ' ');
        const condition5 = (str.length == 10)
        const condition6 = (str[0] == 1 && (str[1] == ' ' || str[1] == '(')&& ( str[5] == ' ' || str[5] == '-' ) && (str[9] == ' ' || str[9] == '-'))
        const condition7 = (str[0] == 1 && str[1] == '(' && str[5] == ')')
        const condition8 = (str[0] == 1 && str[1] == ' ' && str[2] == '(' & str[6] == ')' && str[7] == ' ' && str[11] == '-')
      
        console.log(condition8)
      
        if(condition1 || condition2 || condition3 || condition4 || condition5 || condition6 || condition7 || condition8){
          return true
        }
      
        return false
      
      }
      
      telephoneCheck("1 (555) 555-5555")
      // telephoneCheck("1(555)555-5555")
      // telephoneCheck("1(555)555-5555")
      // console.log(telephoneCheck("555-555-5555"));
      // console.log(telephoneCheck("(555)555-5555"))
      // telephoneCheck("(555)555-5555")
      // telephoneCheck("(555) 555-5555")
      // telephoneCheck("555 555 5555")
      // console.log(telephoneCheck("5555555555"))
      // console.log(telephoneCheck("1 555 555 5555"))
      // telephoneCheck("1 555 555 5555")