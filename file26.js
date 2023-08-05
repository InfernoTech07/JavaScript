// functions
function abc(){
    return 2+4;
}
console.log(abc());
//
function add(){
    return 6+5;
}
const returnValue=add();
console.log(returnValue);

//
function sum(num1,num2){
    return num1+num2;
}
console.log(sum(7,3));

//

function multi(va1,va2){
    return va1*va2;
}
const newMulti=multi(5,7);
console.log(newMulti);

//
function isEven(number){
    if(number % 2==0){
        return true;
    }
    else{
        return false
    }
}
console.log(isEven(2));
console.log(isEven(7));

//
function odd(num){
    return num % 2!== 0;
}
console.log(odd(8));
console.log(odd(7));

//
function firstChar(anyString){
    return anyString[0];
}
console.log(firstChar("Inferno"));

//
function findTarget(array,target){
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

//function expression
const singSongForMe = function(){
    console.log("Songs.....");
}
singSongForMe();

const oddValue= function (num){
    return num % 2!== 0;
}
console.log(oddValue(8));
console.log(oddValue(7));






