/*
    Primitive DataType
    Primitive Data Types are Call by value data types, Copy of variable will be passes in this type.
    7 Types : String, Number, Boolean, null, Undefined, BigInt, Symbol
*/

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outSideTemp = null;
let userEmail;              //undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123456789876543n

/*
    Non-Primitive DataType (Reference)
    Non-Primitive Data Types are Call by reference types, Original variable will be passed in this type.
    3 Types : Array, Object, Function
*/

const heros = ["Neerja", "Himanshu", "Himraj"];
let arrayDemo = {
    name : "Neerja",
    age : 31
}
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);
console.log(typeof outSideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof id);
