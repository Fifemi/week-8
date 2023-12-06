//write a function hat calculates the factorial of a given number
function calculateFactorial(number) {
    //this is a base case: the factorial of 0 and 1 is 1
    if (number === 0 || number === 1) {
      return 1;
    } else {
        //multiply the number by the factorial of (number - 1)
      return number * calculateFactorial(number - 1);
    }
  }
//example: 5*4*3*2*1
  const result = calculateFactorial(5);
// the output on the console is 120
  console.log(result)