const personArray=[["Mayukh",18,"Male"],["Deepshikha",18,"Female"],["Tamaghna",18,"Male"],["Romit",19,"Male"]];
for(let i=0;i<personArray.length;i++){
    console.log("Person: "+(i+1));
    console.log("Name: "+personArray[i][0]);
    console.log("Age: "+personArray[i][1]);
    console.log("Gender: "+personArray[i][2]);    
    console.log();
}