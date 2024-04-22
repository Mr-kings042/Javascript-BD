
// try{
//     newError = new Error("this is an error");
//     // console.log(newError.message);
//     throw newError
// }
// catch(error){
//     console.log(error.message)
// }
class person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
}
class student extends person{
    constructor (name,age,matriNum){
        super(name,age);
        this._matricNum = matriNum;
        this._subjects =[];
        this._grades = [];
    }
    get getmatricNum(){
        return this._matricNum;
    }
    addSubject (subject){
        this._subjects.push(subject)
    }
    calculateAvg(){
        if(this._subjects == []){
            return `${this.name} does not have subject added`
        }
        let sum = 0
    this._subjects.forEach((subjects) => {
             initialValue += subject.grade; 
        });
        const avg = sum / this._subjects.length;
        return avg;
    }
}
const student1 = new student ("kings",20, "MNW2233");
console.log(student1.name);
subject1 = {
name : "maths",
grade : 67
}
subject2 = {
name : "igbo",
grade : 87
}
subject3 = {
name : "english",
grade : 97
}
console.log(student1.age);
console.log(student1.addSubject(subject))