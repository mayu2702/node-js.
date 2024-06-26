//singleton 

//object literals
//Object.create

const mySym = Symbol("Key1")

const JsUser = {
    name:"mayur",
    "full name" :"Mayur Bakal",
    mySym : "mykey1",
    age: 18,
    location:"jaipur",
    email:"mayur@123.com",
    isLogin: false,
    lastLoginDays:["Monday","saturday"]
}
console.log(JsUser.email);
console.log(Jsuser["email"]);
console.log(JsUser["full name"]);
console.log(Jsuser[mySym])


JsUser.email = "mayurchst.com"
//Object.freeze(JsUser)
JsUser.email="mayurqww.com"
console.log(Jsuser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());