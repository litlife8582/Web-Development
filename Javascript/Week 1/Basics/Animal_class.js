class Animal_class{
    constructor(name,legcount,speaks){
        this.name=name;
        this.legcount=legcount;
        this.speaks=speaks;
    }
    
    static myType(){
        console.log("Animal");
    }
    //static is associated with the class
    //do not need to instantiate an object for the class to call the function

    speak(){
        console.log("Hi there "+ this.speaks);
    }
    leg(){
        console.log("The number of legs of "+this.name+" is "+this.legcount);
    }
}

console.log(Animal_class.myType());

let dog=new Animal_class("dog",4,"bhow bhow");
let cat=new Animal_class("Cat",4,"meow");

cat.speak();
cat.leg();
dog.speak();
dog.leg();