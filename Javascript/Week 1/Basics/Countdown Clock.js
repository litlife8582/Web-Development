const prompt=require('prompt-sync')();
let time=prompt("Enter the number of second for countdown:");
function greet(data){
    console.log(data);
}
for(let i=time;i>0;i--){
    setTimeout(()=>greet(i),(time-i)*1000);
}
/*Using Arrow Function in setTimeout: The corrected code uses an arrow function (() => greet(i)) to ensure that greet(i) is\c
called after the specified delay instead of immediately.*/