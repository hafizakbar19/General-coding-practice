let clickable = () => {
let zip = document.getElementById('zip').value;
if (zip === '75000'){
    document.getElementById('cityName').innerHTML = "Karachi";
}else if (zip === '60000'){
    document.getElementById('cityName').innerHTML = "Lahore";
}else if (zip === '50000'){
    document.getElementById('cityName').innerHTML = "Islamabad";
}else{
    document.getElementById('cityName').innerHTML = "Enter valid zip (75000 , 60000 or 50000";
}
};

let el = document.getElementById('submit');
el.onclick = clickable;