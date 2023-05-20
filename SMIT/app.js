
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

// class Phone{
//     constructor(brand,model,ram,memory){
//         this.brand = brand,
//         this.model = model,
//         this.ram = ram,
//         this.memory = memory
//     }; 
// };

// let myPhone1 = new Phone("Samsung","A32",6,128);

// console.log(myPhone1.model);

//  var cityToCheck = prompt("Enter your city");
//  cityToCheck = cityToCheck.toLowerCase();
//  var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
//  for (var i = 0; i <= 4; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//  alert("It's one of the cleanest cities");
//  }
//  }

// let month = "November";
// let ans = month.length;
// if (ans > 3){
//     ans = month.slice(0,3);
      
// };

// console.log(ans); 


// let today = new Date();

// let dDay = new Date("June 30, 2035");

// let dif = dDay - today;
// dif = dif / (1000*60*60*24);
// console.log(dif)

// function tellTime(){
//     let now = new Date();
//     let hr = now.getHours();
//     let min = now.getMinutes();
//     let sec = now.getSeconds();
//     console.log(`The time is ${hr} : ${min} : ${sec}`);
// };

// tellTime()

// let e = document.childNodes[0].childNodes[0];

// console.log(e);

// export function tellTime(){
//     console.log(new Date());
// };


// var x = 10;
// function print (){
//     console.log(x);
//     var x = 20;
// };
// print();

// let company = {
//     head: "Lal",
//     secretary: "Hasan",
//     supervisor: "Akbar",
//     name: "Sapphire",
//     haseGenSet: true
// };

// let sup = "head" in company; // to check if a propery exist in the object. property in metioned in "" and then in and then obj name
// console.log(sup);

// function Building(name,aptNos,maint,water){
//     this.name = name,
//     this.aptNos = aptNos,
//     this.maint = maint,
//     this.water = water
// };
// Building.prototype.condition = function(){  //the prototype adds the function (metod in all of its objects)
//     if (this.maint < 25000){
//         console.log('cheaper')
//     }else{
//         console.log('expensive')
//     }
// };

// let b1 = new Building("Sapphire",27,27000,"Tanker");
// let b2 = new Building("Ayesha Tower",36,25000,"Tanker");
// let b3 = new Building("Royal Elite",52,25000,"Tanker /line");

// console.log(b3.condition);

function printArray (a){
    var len = a.length;
    i = 0;
    if (len == 0){
        console.log("Epmty Array");
    }else{
        do{
            console.log(a[i]);
        }while(++i < len);
    }
};

