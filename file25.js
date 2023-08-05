//objects inside array

const users =[
    {userId:1,firstName:"Abhishek",gender:"male"},
    {userId:2,firstName:"Abhi",gender:"male"},
    {userId:3,firstName:"Singh",gender:"male"},
    {userId:4,firstName:"A",gender:"male"},
]
// for(let user of users){
//     console.log(user.firstName);
// }

const [{firstName: Name}]=users;
console.log(Name);