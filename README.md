**Where variables live - Variables Scoping**

**Three type of scopes: The global scope, scope defined by functions, scopes defined by blocks**

**Only `let` and `const` variables are block-scoped. Variables defined with `var` are end up in the closest functional scope.**

**Every scope has access to all the variables from all its outer scopes. This is scope chain**

**When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable looking for. This is called variable lookup.**

**Scope chain is one-way street. The scope will never has access to the variables of inner scope.**

**THe scope chain has nothing to the order in which functions were called.**

```js
// Variables from global scope are at the top of scope chain!
const myName: string = "Nemanja"; // Global scope. Variables from global scope are accessible from everywhere!

function first(): void {
    const age = 25;
    if(age >= 30) {
        // let and const are block-scoped (ES6)
        const decade = 2;

        // var is function-scoped. So, in this example first() has access to it and second() as well.
        var millenium = true;
    }

    function second(): void {
        const job = 'teacher';

        // Variables myAge and age are not within this function scope, so it will look up for them
        // Scope has access to variables from all outer scopes! (scope chain)
        console.log(`${myName} is ${age} years old and ${job}`)
    }

    // Scope chain works only upwards not downwards or sidewards.

    second()
}



const x = first();
```

## Hoisting

**Calling function before its declaration - like functions are moved to the top of scope chain**

**This is not working for `let` and `const` - if try error occurs: Can't access before initialization (Temporal Dead Zone). `job = uninitialized`

**`var` is byproduct. Using `var` in hosting will not throw error, but instead we would get undefined as a `var` value. Which makes bugs not that easy to find - that is why we avoid `var`s in modern javascript.**

Example with variables
```js
console.log(myName); // undefined
console.log(myAge); // Can't access myAge before initialization
console.log(myProfession); // Can't access myProfession before initialization

var myName = "Nemanja";
const myAge = 35;
let myProfession = "programmer";
```

Example with functions
```js
console.log(addDecl(4, 5)); // We got the result - because we were able to call function before its declaration
console.log(addExpr(1, 7)); // Error: Can't access the function before initialization
console.log(addArrow(8, 5)); // Error: Can't access the function before initialization


function addDecl(a: number, b:number){
    return a + b;
}

const addExpr = function(a: number, b:number){
    return a + b;
}

const addArrow = (a: number, b:number) =>  a + b;
```

Example to show why should we avoid using `var`
```js

if(!cartProducts) deleteAllProductsFromCart(); // In this case deleteAllProductsFromCart() is called, because `cartProducts` is set to undefined (due to how hoisting works with vars).

// Our products would be removed from cart even though cartProducts are set tot 10;
var cartProducts = 10;

function deleteAllProductsFromCart() {
    console.log("All products deleted from cart");
}
``` 
## How `this` Keyword Works

* Within method - `this` is pointing to the Object which calling this method;
* Simple function call - this is undefined;
* Arrow functions - `this` of surrounding function (lexical this);
* Event listener - `this` = <DOM element that handler is attached to>
* `this` does **NOT** point to the function itself, and also **NOT** to its variable environment!

```js
console.log(this); // pointing to the top Object Window

const addExpr = function (a: number, b: number) {
console.log(this); // undefined (in sloppy mode it would point to Window Object);

    return a + b;
}

addExpr(1, 6);

const calcExpr = (a: number, b: number) => {
console.log(this); // within arrow functions, `this` is point to Window Object; Depends on what `this` word is in parent scope
// in this case this will point what this means in (parent) global scope - Window Object
return a + b;
}

calcExpr(5, 5); // Arrow function

const user = {
    name: "Nemanja",
    age: 35,
    profession: "programmer",
    sayHello: function () {
    console.log(`Hello, my name is ${this.name}`); // this will point to the Object user (user.name);
    }
}

user.sayHello();
```

One more example of how to use `this` keyword within regular functions and arrow functions:
```js
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
        // Introduce this within arrow function
        const getFullName = () => {
            console.log(this)
            console.log(`Fullname: ${this.name} ${this.surname}`)
        }

        getFullName();
    }
}

user.sayHello();
```
