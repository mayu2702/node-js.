// 1) Primitive Datatypes

// 7 types: string,Number,Boolean,BigInt,symbol,null,undefined

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
let useremail; //undefined
const ID = Symbol("123")
const anotherID = Symbol("123")

console.log(ID === anotherID);

//referance/non primitive 

//Arrays,objects,Functions 
const heros = ["shaktiman","krish","dos"];
const myobj = {
    Name : "mayur",
    age : 22,
}

const myfunction = function(){
    console.log("Hello wolrd");
}