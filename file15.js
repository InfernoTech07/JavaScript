//Array
//collection of ordered items
//refrence type


let fruits = ["apple","mango","grapes"];
let number =[1,2,3,4,5];

console.log(number);
console.log(number[2]);

console.log(fruits);

//array indexing

console.log(fruits[1]);

let mixed = [1,2,3,4,5, "String",null,undefined];
console.log(mixed);
console.log(mixed[5]);
fruits[0]="Banana";
console.log(fruits);

//typeof 
console.log(typeof fruits);
//method to find array or not
console.log(Array.isArray(fruits));