 let arr1=["item1","item2"];
 let arr2=arr1.slice(0);
 console.log(arr2);
 let ar2=[].concat(arr1);
 console.log(ar2);

 let ar1 =[...arr1,"item5"];
 console.log(ar1);

 let ar3=ar2.slice(0).concat(["item3","item4"]);
console.log(ar3);

console.log(ar1==ar2);
console.log(ar1===ar2);