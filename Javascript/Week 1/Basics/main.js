let a=1;//let- variable 
const b=2;//const- constant value
a=2;
/**name is a keyword */
let firstname="Mayukh";//String
let age=18;//
let boolean=false;//boolean value
console.log(a);
console.log(b);
console.log("This person's name is "+ firstname +" and their age is "+ age);
let married=false;
if (married==true){
    console.log(firstname +" is married");
}else{
    console.log(firstname+" is not married");
}
//Understanding loops
//printing numbers from 0-100
let sum=0
for(let i=0;i<=1000;i++){
    console.log(i);
    sum+=i;
}
console.log(sum);
//Array
const personArray=[["Mayukh",18,"Male"],["Deepshikha",18,"Female"],["Tamaghna",18,"Male"],["Romit",19,"Male"]];
for(let i=0;i<personArray.length;i++){
    console.log("Person: "+(i+1));
    console.log("Name: "+personArray[i][0]);
    console.log("Age: "+personArray[i][1]);
    console.log("Gender: "+personArray[i][2]);    
    console.log();
}