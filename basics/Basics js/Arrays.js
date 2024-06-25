//Arrays 
const myArr = [0,1,3,4,5,5,6,3,]

const myHero = ["shaktiman", "spiderman"]

const myArr1 = new Array(1,2,3,4)
console.log(myArr[1]);

//Array Methods 

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(0)   //add values to the satrting of array 
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(4));

const newArr = myArr.join()
console.log(myArr);
console.log( newArr);

//slice ,splice 

console.log("A",myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1)

console.log("B ",myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2)

console.log("C",myArr);






