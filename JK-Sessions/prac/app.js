// console.log("Hello world!");
// setTimeout(function(){
//     console.log("I will work after 2 seconds")
// },2000);

// var names = ["akbar","ali","ahmed","naveed"]; // this is the literal syntax of making an array
// console.log(names[2]);

// var names = new Array("Akbar","Ali","Saleem","Waseem"); //this is the constructor syntax of making an array
// console.log(names[3]);

// var names = new Array(5); // you can make an empty array with the length of five values this way
// console.log(names);

// var amount = 5000;
// var note = +prompt("Enter your note value: ");
// var ans = amount / note;
// // switch(note){
// //     case 50:
// //         alert(`${amount / 50} notes are required to make ${amount}`);
// //         break;
// //     case 10:
// //         alert(`${amount / 10} notes are required to make ${amount}`);
// //         break;
// //     case 20:
// //         alert(`${amount / 20} notes are required to make ${amount}`);
// //         break;
// //     case 100:
// //         alert(`${amount / 100} notes are required to make ${amount}`);
// //         break;
// //     case 1000:
// //         alert(`${amount / 1000} notes are required to make ${amount}`);
// //         break;
// //     case 75:
// //         alert(`${Math.round(amount / 75)} notes are required to make ${amount}`);
// //         break;
// //     default:
// //         alert(`${Math.round(amount / note)} notes are required to make ${amount}`);
// // }
// if(ans < 0){
//     alert(`${amount / note} notes are required to make ${amount}`);
// }else{
// alert(`${Math.round(amount / note)} notes are required to make ${amount}`)
// }

// function countNotes(amount) {
//     const notes = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1];
//     let remainingAmount = amount;
  
//     for (let i = 0; i < notes.length; i++) {
//       const note = notes[i];
//       const count = Math.floor(remainingAmount / note);
//       if (count > 0) {
//         console.log(`${count} notes of ${note}`);
//         remainingAmount %= note;
//       }
//     }
//   }
  
//   countNotes(5320); 

//objects

// let obj = {
//   name: "Akbar",
//   age: 36,
//   address: "Clifton"
// };
// console.log(obj);

// obj.city = "Karachi"; //adding values in the object
// console.log(obj);

// delete obj.address;  // deleting values from the object
// console.log(obj);



let arr = ["Akbar",{
  name:'Akbar',
  city:"karachi"
},35,true];

console.log(arr[1].city);
