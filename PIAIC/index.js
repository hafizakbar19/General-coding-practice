//function
// const func = (a: number, b:number) => a +b;
// const add = (firstName:string,lastName?:string)=>{  //optional parameter
//     return firstName + " " + lastName;
// };
// console.log(add("Akbar", "Ali"));
//default parameter
var add = function (val1, val2) {
    if (val2 === void 0) { val2 = "Akbar"; }
    return val1 + " " + val2;
};
console.log(add("Ali"));
