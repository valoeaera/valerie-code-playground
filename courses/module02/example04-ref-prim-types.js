//ValoeAera; 17 June 2022

//Integers, Strings, Boolean are Primitive types
//"number2" copies the value of "number".
let number = 10;
const number2 = number;
number = 11;
console.log(number2); //will print "10", because assigning "number" does not change "number2".

//Objects and Arrays are Reference types
//"person"'s value is stored in memory and const "person" is a pointer to that value. "secondPerson" copies that pointer.
const firstPerson = {
    name: "Valerie",
    age: "21"
};

const firstPersonCopy = firstPerson;
const secondPerson = {...firstPerson}; //Using spread from example 2
firstPerson.name = "Autumn";
firstPerson.age = "22";
console.log(firstPersonCopy); //will print "Autumn", because the value in memory was changed and "secondPerson"'s pointer has not changed.
console.log(secondPerson); //will print "Valerie", because instead of storing the pointer, the spread operator takes the actual value and copies it. 
//The spread operator makes this reference type like the primitive type example above.
