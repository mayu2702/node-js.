const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber= 134.8975
console.log(otherNumber.toPrecision(3));

const hundres = 100000
console.log(hundres.toLocaleString('en-IN'));


// ==================MATHS============
//maths functions in java script 

console.log(Math);
console.log(Math.round(4.7));  //round off the number 
console.log(Math.abs(-5));   //negative to positive conversionn
console.log(Math.ceil(4.5));  //highest value in considerd  5
console.log(Math.floor(4.6));// lowest value is considered  4

console.log(Math.min(3,567,33,24,2)); //minimum value 
console.log(Math.max(2,345,2,3,42,)); //maximum value 

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 20
const max = 40

console.log(Math.floor(Math.random() * (max - min + 1))+ min);