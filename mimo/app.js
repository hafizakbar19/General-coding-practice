// const fahrenheit = [72, 68, 70, 74, 77, 75, 79];
// const celcius = [];
// for (const element of fahrenheit ){
//     let c = (element - 32) * (5/9);
//     celcius.push(c);
// }
// console.log(celcius);

// performing same task easily with .map()

// let celcius = fahrenheit.map(function(element){
//     return (element -32) * (5/9);
// })

// console.log(celcius);

// let arr = [5,10,15,20];

// // let doubleArr = arr.map((element,index)=> index + ":" + element * 2);

// // console.log(doubleArr); // .map() is used to perform any function on each of the array element.

// arr.forEach((elm)=>{
//     console.log( elm * 2);
// })

// // console.log(arr);


// filter() method
const testScores = [90, 50, 100, 25, 81, 66, 80];
// const a = [];
// for (const element of testScores){
//     if(element >= 90){
//         a.push(element);
//     }
// };
// console.log(a);

// using filter() method
// let arr = [];
// const b = testScores.filter((element)=>{
//     return element >= 90; 

// });
// arr.push(b);
// console.log(arr);

const participants = ["John", "Paul", "George", "Ringo", "Pete", "Stuart", "Mick"];
const sNames = participants.filter((element)=>{
    return element[0] === "S";
}); // filter() method is used to filter out the elements from the array.
console.log(sNames);