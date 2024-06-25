const marvel_Heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_Heros.push(dc_heros)

//console.log(marvel_Heros);

const all_Heros = marvel_Heros.concat(dc_heros)  //merge two arryas 
console.log(all_Heros);   

const all_new_heros =[...marvel_Heros, ...dc_heros]   //spread method 

console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6] ,7,[6,7,[8,6,7]]]
const real_another_array = another_array.flat(Infinity)   //flat method spread multiple arrays in array 
console.log(real_another_array);

console.log(Array.isArray("Mayur"));
console.log(Array.from("Mayur"));
console.log(Array.from({name:"Mayur"}));  //gives empty array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));   //combines the variables amd makes array 


