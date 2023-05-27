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
// const testScores = [90, 50, 100, 25, 81, 66, 80];
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

// const participants = ["John", "Paul", "George", "Ringo", "Pete", "Stuart", "Mick"];
// const sNames = participants.filter((element)=>{
//     return element[0] === "S";
// }); // filter() method is used to filter out the elements from the array.
// console.log(sNames);

// .reduce() method

// const miles = [33,95,79];
// // let total = 0;
// // for ( const element of miles){
// // total += element;
// // };
// // console.log(total);

// const total = miles.reduce((prev,curr)=>prev+curr);
// console.log(total);

// document.querySelector('h1').innerHTML="Hello";
// document.querySelector("p").innerHTML="hello this is the paragracph selected by querry selector"

let calc = ()=>{
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;

    if(operation == "+"){
        document.getElementById('result').innerHTML= num1 + num2;
    }
    else if(operation == "-"){
        document.getElementById('result').innerHTML= num1 - num2;
    }
    else if(operation == "*"){
        document.getElementById('result').innerHTML= num1 * num2;
    }
    else if(operation == "/"){
        document.getElementById('result').innerHTML= num1 / num2;
    }else{
        document.getElementById('result').innerHTML= "Enter a valid operation sign"
    }
}

// ternary operator

// let age;
// let isAdult = (age <18) ? "young":"mature";

// console.log(isAdult);

// //discount of 15%

// let bill = 1800;
// bill = (bill > 1500) ? bill * 0.85: bill;
// console.log(bill);

// let hour = 14;
// hour = (hour > 12) ? "pm" : "am";
// console.log(hour);

// let toggle = () => {
//     let el = document.querySelector('p');
//     el.classList.toggle("bold");
//     el.classList.toggle('second');
// }

// function human(name,age,nationality){
//     this.name = name,
//     this.age = age,
//     this.nationality = nationality
// };
// var human2 = new human ("Akbar",35,"Pakistani");
// var human3 = new human ("Noor",38,"Indian");

// console.log(human2,human3)

// try {
//     (5).toUpperCase();
// }
// catch (e){
//     console.log(e);
// }

// let el = document.querySelector(".item");
// let change = () => {
//     el.classList.toggle("pink");
// };
// el.ondblclick = change;

// let changeOnscroll = () => {
//     document.querySelector("body").style.backgroundColor = "red";
// };

// document.querySelector("body").onscroll = changeOnscroll;

//asyncronous JS in setTimeout and setInterval callback functions.

// console.log('Exucuted First');
// setTimeout(() => {
//     console.log('Executed Last');
// }, 2000);
// console.log('Executed Second');

// let callback = () => {
//     console.log('Exuted last due to setTimeout')
// };

// console.log('Excuted First');
// setTimeout(callback,1000);
// console.log('Executed Second');

// let countdown = 3;
// const countdownInterval = setInterval(()=>{
//     if (countdown > 0){
//         console.log(countdown);
//     }
//     countdown --;
//     if (countdown < 0){
//         clearInterval(countdownInterval);
//         console.log("Go")
//     }
// }, 1000);

//promise

// const dessertStock = {
//     cheeseCake: 10,
//     moltenCake: 7,
//     cheeseCake: 0
// };

// function orderCheesecake(){
//     return new Promise(fuction(resolve,reject)
//         {
//             if (dessertStock.cheeseCake > 0)
//             {
//             resolve("Cheese cake is available in the stock");
//         }else{
//             reject("sorry Cheese cake is sold out");
//         }

//     });
// };
// const makeOrder = orderCheesecake();
// console.log(orderCheesecake);


// function orderCheesecake() {
//     return new Promise(function(resolve, reject) {
//       if (dessertStock.cheeseCake > 0) {
//         resolve("Cheese cake is available in the stock");
//       } else {
//         reject("Sorry, cheesecake is sold out");
//       }
//     });
//   }
  
//   const makeOrder = orderCheesecake();
  
//   console.log(makeOrder);



// function orderCheesecake() {
//     return new Promise(function(resolve, reject) {
//         if (dessertStock.cheeseCake > 0) {
//             resolve("Cheesecake is available in the stock");
//         } else {
//             reject("Sorry, cheesecake is sold out");
//         }
//     });
// }

// const makeOrder = orderCheesecake();
// makeOrder.then(function(result) {
//     console.log(result);
// }).catch(function(error) {
//     console.log(error);
// });


//classes

// class Animal{
//     constructor(name,species,feed){
//         this.name =name,
//         this.species = species,
//         this.feed = feed
        
//     }
//     eat(food){
//         if(food == "treat"){
//             console.log('Good food')
//         }else{
//             console.log("not good")
//         }
//     }
// }

// const animal1 = new Animal('cat','pet','meat');
// const animal2 = new Animal('cow','grass');

// animal2.eat("treat");


// //inheritance in classes

// class Dog extends Animal{
//     bark(){
//         console.log('woof woof');
//     }
// };
// const dog1 = new Dog('pug','pet','padigree');
// const dog2 = new Dog('german shephard','pet','home food');
// console.log(dog1,dog2);
// dog1.bark();

// class Bird extends Animal{
//     fly(){
//         console.log('flying');
//     }
// }

// const bird1 = new Bird('parrot','pet','seeds');
// bird1.bark();

// class Human {
//     constructor(weapon){
//         this.weapon = weapon;
//         this.life = 100;
//     }
//     recieveHit(){
//         this.life = this.life - 10;
//     }
// }

// class Ninja extends Human{
//     recieveHit(){
//         super.recieveHit(); //it performs action of the parent first and then child's additionally(outputs 85)
//         this.life = this.life - 5;
//     }
// };
// const ninja1 = new Ninja('shuriken');

// console.log(ninja1.life);
// ninja1.recieveHit();
// console.log(ninja1.life);

// const human1 = new Human('sword');
// console.log(human1.life);
// human1.recieveHit();
// console.log(human1.life);

//modules








  