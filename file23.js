//iterate object

const person = {
    name:"Abhi",
    age:23
}

//for in loop

for(let key in person){
    console.log(person[key]);
    console.log(`${key} : ${person[key]}`);
}

//for loop

for(let key of Object.keys(person)){
    console.log(key,person[key]);
}
