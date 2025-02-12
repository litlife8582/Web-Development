//for tranferring data to someone else we can send it in the form of string
const Initial={name:"Mayukh Sarkar",age:18,gender:"Male"}; //format for a javascript object
console.log(Initial["name"]);

//It is a string and it a not longer is a javascript object
//Json class can be used to interchange into javascript stirng and javascript obejct

//parse method- Convert a string into an object
const users='{"name":"Mayukh Sarkar","age":21,"gender":"male"}';//format for a tranferable string
const user=JSON.parse(users)
console.log(user["gender"]);

//Stingify method- Converts and object into a string
const Suser={
    name:"Mayukh Sarkar",
    gender:"Male"
}
console.log(Suser["name"]);

//useful when we get data from server we get it in the form of json.
/*whenever when we send data we send it in the form of string and not objects as
all systems do not understand objects but will understand strings
*/

