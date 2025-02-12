//Write a program to greet a person based on their gender
const prompt=require('prompt-sync')();
let username= prompt("Enter your name: ");
let gender= prompt("Enter your gender: ");
gender=gender.toUpperCase().trim();
if(gender==="MALE") console.log("Hi! Mr."+ username);
else if(gender==="FEMALE") console.log("Hi! Mrs."+username);
else console.log("Invalid");