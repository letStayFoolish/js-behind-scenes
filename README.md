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