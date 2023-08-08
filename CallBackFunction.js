const Calculate =(a,b,operation)=>{
    return operation (a,b);
};

const operation =(n1,n2)=>{
    return n1+n2;
};

const result=Calculate(4,3,operation);
console.log(result);

const add=Calculate(3,4,function(n1,n2){
    return n1+n2;
});

console.log(add);