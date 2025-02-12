const currentDate=new Date();
console.log(currentDate);

console.log(currentDate.getFullYear())
console.log(currentDate.getMonth());
console.log(currentDate.getDate());
console.log(currentDate.getHours());
console.log(currentDate.getSeconds());
currentDate.setFullYear(2022);
console.log("After setFullYear: "+currentDate.getFullYear);


console.log("Time in milisecond since 1970: ",currentDate.getTime());
//Get the number of miliseconds have passed since 1970
 
const prompt=require('prompt-sync')();
function calculateSum(n){
    let a=0;
    for(let i=0;i<n;i++){
        a=a+1;
    }
    return a;
}

let n=prompt("Enter the time: ");
const beforeDate=new Date();
const beforeTimeInMs=beforeDate.getTime();
calculateSum(n);

const afterDate=new Date();
const afterTimeInMs=afterDate.getTime();

console.log(afterTimeInMs-beforeTimeInMs);

function currentTimePrint(){
    console.log(new Date().getTime());
}
setInterval(currentTimePrint,1000);
//Works as a stopwatch and prints the epoch time