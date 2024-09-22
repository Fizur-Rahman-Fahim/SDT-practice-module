const prompt = require("prompt-sync")();
const userInput = parseInt(prompt('Enter a number -> '));

if (userInput % 2 == 0) {
    console.log("Even Number.");
} 
else {
    console.log("Odd Number.");
}

