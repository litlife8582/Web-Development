const prompt=require('prompt-sync')();
function greet(){
    console.log("Hello World");
}
let time=prompt("Enter the time: ");
setTimeout(greet,time*1000);