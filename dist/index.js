"use strict";
const myName = "Nemanja";
function first() {
    let a = 1;
    const b = second(9, 7);
    a = a + b;
    return a;
}
function second(x, y) {
    const c = 2;
    return c;
}
const x = first();
