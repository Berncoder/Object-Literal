//Concise Object Literal Declarations using Object Property Shorthand
const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender
    };
};

//Write Concise Declarative Functions W ES6

const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

//Use Class Syntax to Define a Constructor Function
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);