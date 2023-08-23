//ValoeAera; 17 June 2022

//map(), applies a function to each element in an array and returns an array of the results.
const numbers = [1,3,5,7];
const doubleNumbers = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);
console.log(doubleNumbers);