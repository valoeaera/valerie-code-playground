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

/* Function Invocation and the Execution Stack
Function Invocation (executing a function) creates a new execution context on top of the global execution context
  - Executes code
  - Space for variables and functions
  - Nested functions create their own execution contexts on top of the nestee (FILO)
Variable Environments (Scope)
  - Each "C" below has its own variable environment
  - Each "C" has a different value in each execution context
*/

const B = () => {
  var C = 3;
  console.log("Function B:", C);
};

const A = () => {
  var C = 2;
  console.log("Function A:", C);
  B();
};

var C = 1;
console.log("Global:", C);
A();
