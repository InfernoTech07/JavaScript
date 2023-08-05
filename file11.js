//undefined
//null

let firstName;
console.log(typeof firstName);
firstName="Abhi";
console.log(typeof firstName,firstName);

let myVar =null;
console.log(myVar);
myVar="Abhi";
console.log(myVar,typeof myVar);

//bug,error typeof null gives object
console.log(typeof null);


//BigInt

let myNumber =123;
console.log(Number.MAX_SAFE_INTEGER);

let newNum=BigInt(123);
console.log(newNum);

let num1=12n;
console.log(newNum+num1);


