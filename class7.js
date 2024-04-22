// object oriented programing 
//  javascript classes
class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayProps(){
        return `The person by name ${this.name} is ${this.age} years old`
    }

}

const newInstance = new person ("kings", 30);
console.log(newInstance.sayProps());