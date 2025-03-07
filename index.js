// Write your code in this file!

const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

console.log(welcomeMessage);  // "Welcome to Flatbook, Grace Hopper!"
console.log(excitedWelcomeMessage);  // "WELCOME TO FLATBOOK, GRACE HOPPER!"
console.log(shortGreeting);  // "Welcome, G!"

