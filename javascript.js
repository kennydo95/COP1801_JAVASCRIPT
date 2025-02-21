//Ask the user to enter their first name
let Fname = prompt("Please enter your first name:");

//Check if the user entered a name
if (Fname){
    document.getElementById("welcomeMessage").innerText = `Welcome, ${Fname}! Nice to have you here!`;
} else {
    document.getElementById("welcomeMessage").innerText = "Welcome! Nice to have you here!";
}

//Constant piValue
const piValue = 3.1415926;

//Ask the user to enter their fav numbers
let favNum = prompt("Please enter your first favorite number:");

//Check if the user entered a number
if (favNum){
    document.getElementById("favNum").innerText = `Your first favorite number is ${favNum}.`;
} else {
    document.getElementById("favNum").innerText = "You did not enter a number.";
}

let myArea = piValue * (favNum * favNum);
document.getElementById("area").innerText = `Your favorite number is ${favNum}, if that number was the radius area of a circle that could ${myArea}.`;