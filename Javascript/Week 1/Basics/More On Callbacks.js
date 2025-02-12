
const dog={
    name:"doggie",
    legcount:4,
    speaks:"Bhow Bhow",
};

const cat={
    name:"cat",
    legcount:4,
    speaks:"Meow Meow",
};

const horse={
    name:"Horsie",
    legcount:4,
    speaks:"Bruh Bruh",
};

const human={
    name:"Man",
    legcount:2,
    speaks:"Hi!!!",
};

function printStr(animal){
    console.log("animal "+animal["name"]+" "+animal["speak"]);
};

console.log(printStr(dog));
console.log(printStr(cat));
console.log(printStr(human));