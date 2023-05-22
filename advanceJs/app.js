// function sum (){
//     let sum = 0;
//     for(let i in arguments){
//         sum += arguments[i]
//     }
//     console.log(sum)
// }

// let obj = {
//     fname: "Akbar",
//     lname: "Ali",
//     age: 35,
//     nationality: "Pakistani"

// }

// for (let i in obj){
//     console.log(i + ":" + obj[i]);
// }

// function sum (){
//     console.log(arguments);
// }
// sum(20,30);
// sum(10,20,30);

// let obj1 = {
//     fname: "Akbar"
// }
// let obj2 = {
//     age: 35
// }
// let obj3 = {...obj1,...obj2}
// console.log(obj3)  //concatination with spread operator

//object literals

// let fname = "Akbar";

// let obj = {
//     [fname] : "Man",
//     pref(){
//         console.log("hello")
//     }
// }

// console.log(obj[pref]())

//Array destructuring

// let user = ["Akbar", 35,"Karachi",["male",40000]];

// let [name,...args] = user;

// console.log(args);

//destructuring objects

let obj ={
    name: "Akbar",
    age: 35,
    city: "Karachi"
};

let {name : n, age:a, city:c} = obj; //alias

console.log(n);
console.log(a);
console.log(c);

