// object destructuring

const band ={
    bandName:"alkj",
    famousSong:"sjjdkd",
    year:1978,
};
 let {bandName:var1,famousSong,...restprops}=band;
 //var1="queen";

 console.log(var1);
 console.log(restprops);