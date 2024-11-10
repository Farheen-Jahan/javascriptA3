// Javasript loop assignment

//Q1. Print the pattern
// *
// **
// ***
// ****
// *****

for(let i=1;i<=5;i++){
    let star =' ';
    for(let j=1;j<=i;j++){
       star+='*';
    }
   
    console.log(star);
}

// Q2. Iterate through all numbers from 1 to 45. Print the following:

//    For multiples of 3 print “Fizz”
//    For multiples of 5 print “Buzz”
//    For multiples of 3 and 5 print “FizzBuzz”


    for(let i=1;i<=45;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }

    else if(i%5==0){
        console.log("Buzz");
    }

    else if(i%3==0){
        console.log("Fizz");
    }
}


// Q3. Calculate the sum of all the numbers in the following array

var num = [1,13,22,123,49];
let sum=0;

for(let i=0;i<num.length;i++){
    sum+=num[i];
}

console.log(sum);

// Q4.Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

var arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
var arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; 
let sum1 =0;
let sum2 =0;

for(let i=0;i<arr1.length;i++){
    sum1+=arr1[i];
}
console.log(sum1);

for(let j=0;j<arr2.length;j++){
    sum2+=arr2[j];
}
console.log(sum2);

result=sum1+sum2;

console.log("The sum of both the array is "+ result );


// Q5.Using a for loop output the elements in reverse order

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
//   Example output: 
//   true 3.5  be  false cannot  true 9 what 43 OR each item   on a new line

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

for(let i=arr.length;i>=0;i--){
    console.log(arr[i]);
}




