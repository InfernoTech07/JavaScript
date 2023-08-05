//arrow function

const addValue = () => {
    
    console.log("arrow function");
    return 2;

}
console.log(addValue());

// 
const addNumber = (num1,num2)=>{
    return(num1+num2);
}
console.log(addNumber(3,4));

//
const hlo = () =>{
    console.log("hello");
}
hlo();

//
const findTarget = (array,target) => {
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;

}
const arr=[1,2,3,4,5,6,7,8,9];
const ans=findTarget(arr,6);
console.log(ans);
const ans1=findTarget(arr,11);
console.log(ans1);

//
const isEven = number => number % 2 ===0;
console.log(isEven(6));



//hello();
 hello = () =>{
    console.log("hellojjj");
}
hello();