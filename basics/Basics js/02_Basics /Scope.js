
let a = 31  //global scope 
if(true){
    let a = 10
    const b = 20   //block scope 
    var c = 30
    console.log("Inner :", a);  //10
}
for( let i = 0; i< array.length;i++){
    const element = array[i];
}

//console.log(b); 
console.log(a);  //300
console.log(c);   //scope problem with the var 


function one (){
    const username  ="Mayur"

    function two(){
        const website ="github"
        console.log(username);
    }
    //console.log(website);error

    two()
}
one()

if(true){
    const username = "Mayur"
    if(username == "Mayur"){
        const website = "github"
        console.log(username + website);
    }
    //console.log(website);  error
}
//console.log(username);error

// +++++++++++++Interesting+++++++++++++

function addone (Num){
    return Num+1

}
console.log(addone(5))

const addTwo = function(Num){
    return Num + 2
}
addTwo(5)