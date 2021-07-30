//Name:   Matt Keplinger
//Org:    devCodeCamp
//Title:  Day Trip Planner
//Date:   30 July 2021

"use strict"

//Setup Arguments

let destArray = ['Savannah', 'Charleston', 'Atlanta', 'Jacksonville', 'Brunswick'];
let foodArray = ['Seafood', 'Burgers', 'BBQ', 'Food Truck Goodies', 'Soul Food'];
let transArray = ['Motorcycle', 'Personal Car', 'Guided Tour Bus'];
let funArray = ['Dance Club', 'Beach', 'Museum', 'Historic Landmark', 'Shopping Area'];

//Execute Function
let ranDest = confirmItem(destArray);
let ranFood = confirmItem(foodArray);
let ranTrans = confirmItem(transArray);
let ranFun = confirmItem(funArray);
let myTrip = confirmChoice();


//DECLARE FUNCTIONS
//Choose random index from array
function randomItem(randomArray) {
    let randomValue = randomArray[Math.floor(Math.random() * randomArray.length)];
    return randomValue;
}

//Confirm that the user wants the random item 
function confirmItem(randomArray) {
    let makeChoice = randomItem(randomArray);
    let newChoice = randomItem(randomArray);
    let confirmChoice = prompt(`Are you happy with ${makeChoice}?\nType 'yes' or 'y' to confirm.`);
    if (confirmChoice === 'yes' || confirmChoice === 'y') {
        console.log(`Item confirmed: ${makeChoice}`);
       return makeChoice;
    }
    else{
        newChoice;
        prompt(`Are you happy with ${newChoice}\nType 'yes' or 'y' to confirm.`);
        console.log(`Item confirmed: ${newChoice}`);
        return newChoice;
    }
}

//If user wants to make changes to the trip, allow for changes
function makeNewChoice() {
    let tryAgain = prompt(`Do you wish to make changes to your trip?\nType 'yes' or 'y' to make changes.`);
    if (tryAgain === 'yes' || tryAgain === 'y') {
        let userInput = prompt('Enter one of the following options (digit only):\n 1-Destination\n 2-Food\n 3-Transportation\n 4-Entertainment');
        switch (userInput) {
            case "1":
                ranDest = confirmItem(destArray);
                break;
            case "2":
                ranFood = confirmItem(foodArray);
                break;
            case "3":
                ranTrans = confirmItem(transArray);
                break;
            case "4":
                ranFun = confirmItem(funArray);
                break;
            default:
                confirmItem();
                confirmChoice();
                break;
        }
    }
}

//Confirm user's final choices
function confirmChoice() {
    let confirmDecision = prompt(`Do you wish to confirm the trip details?\nType 'yes' or 'y' to confirm.`);
    if (confirmDecision === 'no' || confirmDecision === 'n') {
        makeNewChoice();
        confirmChoice();
    }
    else {
        showConfirmation();
    }
}

//display output to show user options
function showConfirmation() {
    console.log(`Trip confirmed to ${ranDest}, eating ${ranFood}, traveling via ${ranTrans} and visiting a ${ranFun}.`);
    }


