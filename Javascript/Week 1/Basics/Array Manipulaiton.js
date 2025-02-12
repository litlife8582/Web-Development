const initialArray=[1,2,3];

initialArray.push(2);//Adds element 2 at the end of array
console.log(initialArray);

initialArray.pop();//removes last element of the array
console.log(initialArray);

initialArray.unshift(0);//adds one or more element at the beginning of the array
console.log(initialArray);

secondArray=[4,5,6];
const finalArray=initialArray.concat(secondArray);//combines two array
console.log(finalArray);

function logthing(str){
    console.log(str);
}
initialArray.forEach(logthing);//iterates over each element and applies logthinf function to each element of the array