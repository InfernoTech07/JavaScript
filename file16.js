// Array methos


//push

let fruits=["apple","Mango","banana"];
console.log(fruits);
fruits.push("Grapes");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits.pop());

let popedfruit =fruits.pop();
console.log("popped fruits is:",popedfruit);

//add from start use unshift
fruits.unshift("Banana");
console.log(fruits);

//remove from start
fruits.shift();
console.log(fruits);