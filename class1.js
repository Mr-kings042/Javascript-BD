//javascript loops
// for loop, while loop, for of loop,for in loop, do while loop
// arrays
// objects
let cars = ["toyota","honda", "lexus","hyndia", 6, true];
// console.log(cars.length);
// console.log(cars[cars.length-1]);
// console.log(cars.slice(-1));
// for (let a = 10; a >= 100; a--){
//     console.log(a)
// }
// let p = 0;
// while (p <= (cars.length - 1)){
//     console.log(cars[p]);
//     p++;
// }
// let k = 0;
// do{
//     console.log(cars[k]);
//     k++;
// }while(k <= (cars.length - 1))
// for(car of cars){
//     console.log(car);
// }
// for(car in cars){
//     console.log(car);
// }

cars.forEach(item => {
console.log(item);
});
//objects

let phones = {
    make: "techno",
    model: "camon20",
    year: 2022
};
console.log(phones.make);
console.log(phones["make"]);
const newPhone = () => {
    console.log(`The name of my new ${phones.make} is ${phones.model}`);
}
phones.new = newPhone;
phones.new();