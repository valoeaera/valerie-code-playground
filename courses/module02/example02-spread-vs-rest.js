//ValoeAera; 17 June 2022

//Spread Operator
const oldArray = [1,1,1,3,4,7];
console.log(oldArray);
//Spread add the contents of the old array to a new array as SEPARATE elements
const newArray = [...oldArray,11,18,29];
console.log(newArray);

const oldObject = {"name":"Lightning Bolt","color":"Red","mv":1};
console.log(oldObject);
//Same as before but for objects
const newObject = {...oldObject,"type":"Instant"};
console.log(newObject);


//Rest Operator
const filterArgs = (...args) => {
    return args.filter(
        element => element === "troy"
    );
}

console.log(["ben","troy","georges","sabrina","matt","shawn","wendell","erin"])
console.log(filterArgs("ben","troy","georges","sabrina","matt","shawn","wendell","erin"));