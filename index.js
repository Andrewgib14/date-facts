const chalk = require("chalk");
const moment = require("moment");

let m = moment();
let secondsOfDay = (m.hour() * 3600) + (m.minute() * 60) + (m.second());

console.log("It is " + chalk.blueBright(m.format('dddd, MMMM Do YYYY, hh:mm:ss a.')));
console.log("It is " + chalk.magenta(m.format('DDDD') + "th ") + "day of the year.");
console.log("It is " + chalk.cyan(secondsOfDay) + " seconds into the day.");
if (m.isDST()) {
    console.log("It " + chalk.green("is") + " Daylight Savings Time.");
}
else {
    console.log("It is not Daylight Savings Time.");
}
if (m.isLeapYear()) {
    console.log("It is a Leap Year.");
}
else {
    console.log("It " + chalk.red("is not") + " a Leap Year.")
}




