const minDaysInFuture = 80; // Minimum number of days in the future the event will occur.
const maxDaysInFuture = 200; // Maximum number of days in the future the event will occur.

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January","February","March","April","May","June","July","August","Septemer","October","November","December"];

var fs = require('fs');

let loadFileAsArray = (filename) => {
    let array = fs.readFileSync(filename).toString().replace(/\r/g, "").split("\n");
    return array;
}

const people = loadFileAsArray("./data/people.txt");
const events = loadFileAsArray("./data/events.txt");

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

// generate a random number of days in the future between const values
let daysInFuture = Math.floor(Math.random()*(maxDaysInFuture-minDaysInFuture+1)+minDaysInFuture);

// choose a random person from the people array
let peopleIndex = Math.floor(Math.random()*people.length);

// choose a random even from the event array
let eventsIndex = Math.floor(Math.random()*events.length);

let today = new Date;
let eventDate = today.addDays(daysInFuture);

console.log(`On ${daysOfWeek[eventDate.getDay()]}, ${months[eventDate.getMonth()]} ${eventDate.getDate()}, ${eventDate.getFullYear()}, ${people[peopleIndex]} will ${events[eventsIndex]}.`);
