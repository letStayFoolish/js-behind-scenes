"use strict";
// // Variables from global scope are at the top of scope chain!
// const myName: string = "Nemanja"; // Global scope. Variables from global scope are accessible from everywhere!
//
// function first(): void {
//     const age = 25;
//     if (age >= 30) {
//         // let and const are block-scoped (ES6)
//         const decade = 2;
//
//         // var is function-scoped. So, in this example first() has access to it and second() as well.
//         var millenium = true;
//     }
//
//     function second(): void {
//         const job = 'teacher';
//
//         // Variables myAge and age are not within this function scope, so it will look up for them
//         // Scope has access to variables from all outer scopes! (scope chain)
//         console.log(`${myName} is ${age} years old and ${job}`)
//     }
//
//     // Scope chain works only upwards not downwards or sidewards.
//
//     second()
// }
//
//
// const x = first();
// Variables Hoisting
// console.log(myName);
// console.log(myAge);
// console.log(myProfession);
//
// var myName = "Nemanja";
// const myAge = 35;
// let myProfession = "programmer";
// Functions Hoisting
// console.log(addDecl(4, 5)); // We got the result - because we were able to call function before its declaration
// console.log(addExpr(1, 7)); // Error: Can't access the function before initialization
// console.log(addArrow(8, 5)); // Error: Can't access the function before initialization
function addDecl(a, b) {
    return a + b;
}
const addExpr = function (a, b) {
    return a + b;
};
const addArrow = (a, b) => a + b;
// Example to show why should we avoid using `var`
// if(!cartProducts) deleteAllProductsFromCart(); // In this case deleteAllProductsFromCart() is called, because `cartProducts` is set to undefined (due to how hoisting works with vars).
// Our products would be removed from cart even though cartProducts are set tot 10;
var cartProducts = 10;
function deleteAllProductsFromCart() {
    console.log("All products deleted from cart");
}
// How `this` Keyword Works
/**
 * Within method - `this` is pointing to the Object which calling this method;
 *
 * Simple function call - this is undefined;
 *
 * Arrow functions - `this` of surrounding function (lexical this);
 *
 * Event listener - `this` = <DOM element that handler is attached to>
 *
 * `this` does **NOT** point to the function itself, and also **NOT** to its variable environment!
 */
console.log(this); // pointing to the top Object Window
// const addExpr = function (a: number, b: number) {
//     console.log(this); // undefined (in sloppy mode it would point to Window Object);
//
//     return a + b;
// }
addExpr(1, 6);
// const calcExpr = (a: number, b: number) => {
//     console.log(this); // within arrow functions, `this` is point to Window Object; Depends on what `this` word is in parent scope
//     // in this case this will point what this means in (parent) global scope - Window Object
//     return a + b;
// }
// calcExpr(5, 5); // Arrow function
const user = {
    name: "Nemanja",
    surname: "Karaklajic",
    age: 35,
    profession: "programmer",
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`); // this will point to the Object user (user.name);
        // Solution 1
        // const self = this;
        // const getFullName = function() {
        //     console.log(self)
        //     console.log(`Fullname: ${self.name} ${self.surname}`)
        // }
        // Solution 2
        const getFullName = () => {
            console.log(this);
            console.log(`Fullname: ${this.name} ${this.surname}`);
        };
        getFullName();
    }
};
user.sayHello();
