
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