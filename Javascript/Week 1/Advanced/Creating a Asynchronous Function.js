const { resolve } = require("path");

//We will create an asynchronous function on top of of other asynchronous function
function sarkarReadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
         resolve(data);
        });
    })
}
function onDone(data){
    console.log(data);
}

sarkarReadFile().then(onDone);