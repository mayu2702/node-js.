console.log("2" > 1);    //true
console.log("02" < 1)    // false 

console.log(null > 0);   //false 
console.log(null == 0);  // false 
console.log(null >= 0);   //true  comparisons convert null to a number treated as 0 thats why null>=0 is true and null > 0 is false

console.log(undefined == 0);   //false
console.log(undefined > 0);    //false
console.log(undefined <= 0);   //false

// ===   strict check

console.log("2" > 1); 