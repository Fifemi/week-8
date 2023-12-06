//No: 1- create a function that checks if the input/parameter is an even number
//create a function named evenNo
function evenNo (number) {
    //using modulo operator (%) to check if the remainder of the division by 4 is 0, if its 0, the number is even, otherwise its odd
    return number % 4 === 0;
}

//check if 4 is an even number
let result = evenNo(4);
//display the output to be true
console.log(result);



//No: 2- create a function that prints to the console n1 to n2, where n1 is the first input/parameter and n2 is the second input/parameter
//create a function named printNumbers
function printNumbers(n1, n2) {
    //use for loop to iterate from n1 to n25
    for (let i = n1; i <= n2; i++) {
        //log the output inside the loop to print each number
        console.log(i);
    }
}
//print numbers from 1 to 20
printNumbers (1, 20);



//No: 3- create a function that sum the values in-between two numbers e.g calcFunc (1,3) returns 6. i.e 1+2+3
//create a function named calcFunc
function calcFunc (m1, m2) {
    //initialize a variable
    let sum = 0;
    //use for loop to iterate from m1 to m2
    for (let i = m1; i <= m2; i++) {
        //add each number to the sum inside of the loop
        sum += i;
    }
    //return the calculated sum
    return sum;
}
//calculate the sum of numbers from 1 to 3
let seeResult = calcFunc(1, 3);
//the output will be 6
console.log(seeResult);

//another instance
let myResult = calcFunc (4, 7);
console.log(myResult);