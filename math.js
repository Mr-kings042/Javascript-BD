import {searchStr} from "./class2.js";
const addNum = (num1,num2) => {
    return num1 + num2;
}
// const calculate = (num1,num2,operation) => {
//   let  allowedOperations = ["+","-","/","*"];
//     if(!allowedOperations.includes(operation)){
//         throw new Error (`invalid operations`)
//     }
// };
// calculate(1,2,);
console.log(addNum(1,2));
let p = ['2', '55', '888', '9', '30', '45'];
let key = '55';
console.log(searchStr(p, key));