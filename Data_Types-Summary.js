// Primitive Data Types

// 7 Types :- String , Number , Boolean, Null, Undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 345268382983399n



//Reference (Non Primitive)

//Array, Objects, Functions

const heros = ["Shaktimaan", "Naagraj", "Doga"];
let myObj = {
    Name: "Anish",
    Age: 22,

}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
