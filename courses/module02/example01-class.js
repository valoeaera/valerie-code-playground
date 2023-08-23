// ValoeAera; 17 June 2022

// Demonstration of a Class
class Human {
    constructor () {
        this.gender = "female";
    }

    printGender() {
        console.log(this.gender);
    }
}

// Demonstration of Inheritance
class Person extends Human {
    constructor () {
        super(); // Call parent constructor
        this.name = "Valerie";
    }

    printMyName() {
        console.log(this.name);
    }
}

const valerie = new Person();

console.log("JS6 Method:")
valerie.printMyName();
valerie.printGender();
console.log("");

// Demonstration of Next-Gen JavaScript
class newHuman {
    gender = "female";

    printGender = () => {
        console.log(this.gender);
    }
}

class newPerson extends newHuman {
    name = "Valerie";

    printMyName = () => {
        console.log(this.name)
    }
}

const newValerie = new newPerson();

console.log("JS7 Method:")
newValerie.printMyName();
newValerie.printGender();