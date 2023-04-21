
// //finding something in the array
// let cities = ["Karachi", "Lahore","Islamabad","Peshawar"];
// let city = prompt("Enter city name: ");
// let found = false;

// for( let i = 0; i < cities.length; i++){
//     if(city.toLocaleLowerCase() === cities[i].toLocaleLowerCase()){
//         console.log("Found in the list of cities " + city);
//         found = true;
//         break;
//     }
// }
// if(!found){
//     console.log("Not found! " + city);
// }

//nested loops

// for (let i = 1; i <=15; i++){
//     let star = "";
//     for(let j = 1; j <= i; j++){
//         star = star + "* ";
//     }console.log(star);
// } 


// let para ="Hello this is the dummy text for the work practice";
// para.replace("Hello","Hi");
// console.log(para);

// num = Math.random();
// num = num.toFixed(2);

// // let num = 5.5;
// // num = Math.floor(num);
// console.log(num);



//random number game
// let num = Math.floor(Math.random() *10);
// let guess = +prompt("Guess the number: ");
// if(num === guess){
//     alert("You Win");
// }else if(guess +1 === num || guess -1 === num){
//     alert("You are so close the number: " + num);
// }else{
//     alert("You lost! the number is: "+ num);
// }


//classes

// class Human {
//     constructor(lang,ethnicity,hairColor){
//         this.lang = lang,
//         this.ethnicity= ethnicity,
//         this.hairColor = hairColor

//     }
// }

// const american = new Human("English","White","Grey/brown");
// const indian = new Human("Hindi","Brown/indian","Black");
// const pakistani = new Human("urdu","Brown/indian","Black");

// console.log(american.lang, pakistani.lang);

class Phone{
    constructor(brand,model,ram,memory){
        this.brand = brand,
        this.model = model,
        this.ram = ram,
        this.memory = memory
    }; 
};

let myPhone1 = new Phone("Samsung","A32",6,128);

console.log(myPhone1.model);