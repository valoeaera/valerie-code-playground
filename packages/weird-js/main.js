// Hoisting

b(); // b executes normally: "Called b!" is output
console.log(a); // a is "undefined", declaration is hoisted but not definition

/*
Execution Context is set up in two phases:

1. Creation Phase
  - Memory space for variables and functions are set up
    - Code is *not* "moved"
    - Space is simply allocated before execution
    - This is what is called "hoisting"
2. Execution Phase
  - Variable assignments are made
    - The space for "a" set up in Phase 1 is empty (undefined)
      - All variables are set to undefined by default
    - Only defined in this phase
  - Functions are stored in memory in their entirety
*/

var a = "Hello World!";
function b() {
  console.log("Called b!");
}

// Undefined as a Concept - "not defined" vs. "undefined"

var c;
console.log(c); // undefined
/* 
console.log(d);
- This gives an error: "Uncaught ReferenceError: d is not defined"
- No space was set up in the Creation Phase
*/

if (c === undefined) {
  console.log("c is undefined"); // this statement is executed
} else {
  console.log("c is defined");
}

// Don't set things to undefined!
