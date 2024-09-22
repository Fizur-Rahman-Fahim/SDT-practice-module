const prompt = require("prompt-sync")();
const userInput = parseInt(prompt('Enter the userInput -> '));

if (!isNaN(userInput)) {
    if ((userInput % 4 === 0 && userInput % 100 !== 0) || userInput % 400 === 0) {
        console.log(`${userInput} is a leap Year.`);
    } 
    else {
        console.log(`${userInput} is not a leap Year.`);
    }20
}
else {
    console.log("Invalid input. Please enter a valid Year.");
}