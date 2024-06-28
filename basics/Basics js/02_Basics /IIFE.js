//Immediately Invoked Function Expressions (IIFE)

(function connection(){
    console.log("DB CONNECTED");
})();   //name IIFE

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Mayur")   //Unnamed IIFE 


