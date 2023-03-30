
//finding something in the array
let cities = ["Karachi", "Lahore","Islamabad","Peshawar"];
let city = prompt("Enter city name: ");
let found = false;

for( let i = 0; i < cities.length; i++){
    if(city.toLocaleLowerCase() === cities[i].toLocaleLowerCase()){
        console.log("Found in the list of cities " + city);
        found = true;
        break;
    }
}
if(!found){
    console.log("Not found! " + city);
}