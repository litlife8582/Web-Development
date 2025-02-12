function findIndexOf(str,target){
    console.log("Original String")
    console.log("Index: ",str.lastIndexOf(target));
}
findIndexOf("Hello World World World","World");

function getSlice(str,start,end){
    console.log("Orginal String: ",str);
    console.log("After slice: ",str.slice(start,end));
}
getSlice("Hello World",0,5);

const value="Mayukh Sarkar";
let ans1=value.substr(0,5);//length of the file starting from the 0th to next 5 indexes
let ans2=value.slice(2,5);//Starts from the first parameter to the second parameter
console.log(ans1);
console.log(ans2);


function cutIt(str,startIndex,endIndex){
    let newStr="";
    for(let i=0;i<str.length;i++){
        if(i>=startIndex && i<endIndex){
            newStr=newStr+str[i];
        }
    }
    return newStr;
}
let ans=value.slice(2);
console.log(ans);
console.log(cutIt(value,2,5));

function replaceString(str,target,replacement){
    console.log("Orginal String: ",str);
    console.log("After replace:",str.replace(target,replacement));
}
replaceString("Hello World","World","JavaScript");

const word=value.split(" ");
console.log(word);

const value2="      Mayukh Sarkar       "
console.log(value2.trim());


/*parseInt():- How It Works
Conversion: The function converts its first argument to a 
string (if it isn't already) and starts parsing from the beginning.
    
Valid Numbers: It extracts the integer value from the string until
it reaches a character that cannot be part of the number.

Return Value: If the first character cannot be converted to a 
number, parseInt returns NaN. If parsing is successful, it returns
the integer value.
*/
function expalainParseInt(value){
    console.log("Original Value: ",value);
    let result=parseInt(value);
    console.log("After parseInt: ",result);
}
expalainParseInt("42");
expalainParseInt("42px");
expalainParseInt("3.14");

console.log(parseFloat("3.14wd"));