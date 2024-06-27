
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