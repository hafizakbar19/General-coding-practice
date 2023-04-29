//function
// const func = (a: number, b:number) => a +b;

// const add = (firstName:string,lastName?:string)=>{  //optional parameter
//     return firstName + " " + lastName;
// };
// console.log(add("Akbar", "Ali"));

//default parameter

// const add = (val1:string, val2= "Akbar")=>{
//     return val1 + " " + val2;
// }
// console.log(add("Ali"));// Ali Akbar

//rest parameter
const add = (val1:string, ...restOfName: string[])=>{
    return val1 + " " + restOfName.join(" ");
};

