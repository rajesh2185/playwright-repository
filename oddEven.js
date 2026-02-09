/* Assignment Requirements:
1. Create a function named `isOddOrEven` that takes a number as a parameter
2. Declare and initialize the variable
3. Use a conditional statement to check if the number is divisible by 2
4. Call the function and print the result */


let num= Number(19);
let count;

function isOddOrEven(num)
{
if(num%2==0)
    {
    //console.log("Even number" +number)
    console.log(`Even Number ${num}`); //template literal
}
else {
    console.log(`Odd Number ${num}`); 
}
}

isOddOrEven(num);