//function inside function 

const app= ()=>{
    const myFunc=()=>{
        console.log("myfunc function ");
    }
    console.log("inside app function");
    myFunc();
}
app(); 