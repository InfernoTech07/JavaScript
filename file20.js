//array destructuring

const arr1=["value1","value2"];
let var1=arr1[0];
let var2=arr1[1];

console.log(var1);
console.log(var2);

let [v1,v2]=arr1;
v1="changed";
console.log(v1);
console.log(v2);
