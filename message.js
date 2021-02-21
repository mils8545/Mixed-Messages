const minDaysInFuture = 80; // Minimum number of days in the future the event will occur.
const maxDaysInFuture = 200; // Maximum number of days in the future the event will occur.

const people = ["Betty White", "Barrack Obama", "Lady Gaga", "Linus Torvalds", "Jeff Kaplan"]; // Array of people the the event can occur to.
const events = ["sneeze while in a car", "eat a ham sandwich", "will phone their cousin to say hello", "will buy a new iPad"]; // Array of events that can occur.

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January","February","March","April","May","June","July","August","Septemer","October","November","December"];

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

console.log(daysInFuture);
console.log(`On ${daysOfWeek[eventDate.getDay()]}, ${months[eventDate.getMonth()]} ${eventDate.getDate()}, ${eventDate.getFullYear()}, ${people[peopleIndex]} will ${events[eventsIndex]}.`);
