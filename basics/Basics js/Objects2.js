//singleton 

//const tinderUser = new Object()  //singleton object 
const tinderUser ={}   

tinderUser.id = "123abs"
tinderUser.name = "Sam"
tinderUser.isLoggedin = false
//console.log(tinderUser);

const resgularUser ={
    email : "mayur123.com",
    fullname: {
        userfullname :{
            firstname :"mayur",
            lastname:"bakal"
        }
    }
}
console.log(resgularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

//const obj3 =Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users= [
    {
        id : 1,
        email : "h@234kd.com",

    },
    {
        id : 1,
        email : "h@234kd.com",

    },
    {
        id : 1,
        email : "h@234kd.com",

    }
]

users[1].email 
console.log(tinderUser);

console.log(Object.keys(tinderUser));  
console.log(Object.values(tinderUser));  
console.log(Object.entries(tinderUser));  

console.log(tinderUser.hasOwnProperty('isLogged'));

