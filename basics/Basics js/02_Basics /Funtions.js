
function SayMyname (){
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("R");

}

//SayMyname()
//function addTwoNumbers(Num1,Num2){
//    console.log(Num1+Num2);
//}
function addTwoNumbers(Num1,Num2){
    //let result = Num1+Num2
    //return result;
    return Num1+Num2
}
const result = addTwoNumbers(3,4)
console.log("Result :",result);


function LoginUserMessage(username ="sam")
{   
    if(username === undefined){
        console.log("Please enter a username ");
        return
    }
    return`${username} just logged in`
}

console.log(LoginUserMessage("Mayur"))
console.log(LoginUserMessage())    //undefined


function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500,4894,3447));

const user = {
    username : "Mayur",
    price : 199

}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleobject(user)
handleobject({
    username : "sam",
    price : 399
})

const myNewArray = [300,300,3992,200,100]

function retunSecondValue (getArray){
    return getArray[0]
}
console.log(retunSecondValue(myNewArray));
console.log(retunSecondValue([200,345,456,5678]));
