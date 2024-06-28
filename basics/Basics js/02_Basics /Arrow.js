const user = {
    username : "Mayur",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website `);
        console.log(this); //cureent context 
    }   

}
user.welcomeMessage()
user.username = "sam"
user.username()
console.log(this);


function one(){
    console.log(this);
    //console.log(this.username); //undefined 
}

one()

// const chai = function(){
//     let username = "mayur"
//     console.log(this.username);
// }

const chai = () => {
    let username = "mayur"
    console.log(this);
}

//chai()
// const addTwo(num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,5));
// const addTwo = (num1,num2)  => { 
//     return num1 + num2
// }
// const addTwo = (num1,num2) => num1+ num2


const addTwo = (num1,num2) =>(num1+num2)  //npo need of write return keyword 
const addTwo = (num1,num2) => {username : "hitesh"}
console.log(addTwo(3,7));


// const myArray = [ 2,4,5,7,7]

// myArray.forEach(
