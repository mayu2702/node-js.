const name = "mayur";
const repcount = 21;

//console.log(name + repcount + " value");  //out dated syntax 

console.log(`My name is ${name} my repcount is ${repcount}`);  //standard syntax 
const gameName = new String('mayurnode')
console.log(gameName[0]);  // key valaue pair accesing
console.log(gameName.length);  //length property
console.log(gameName.toLocaleUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("m"));

const newString = gameName.substring(0, 4)   //substring 
console.log(newString);

const anotherstring = gameName.slice(-3, 4);  //slice method
console.log(anotherstring);

const newstring1 = "    mayur    ";
console.log(newstring1);
console.log(newstring1.trim);   //trim method 


console.log(newstring1.replace('ma','aa'));   //replace 
console.log(newstring1.includes(fhsfsid));  // includes method search the data given is present or not 
console.log(gameName.split('_'));  //split method 