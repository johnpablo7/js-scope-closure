// asignación y declaración || reasignación y redeclaración
// var
var firstName; // declaración (undefined)
firstName = "Oscar"; // asignación
firstName = "Pepe"; // reasignación
var firstName = "Andres"; // redeclaración y reasignación
console.log(firstName);
// Andres

// let
let fruit = "Apple"; // declaración y asignación
fruit = "Kiwi"; // reasignación
console.log(fruit);
// Kiwi

let fruit = "Banana"; // redeclaración y reasignación
console.log(fruit);
// SyntaxError

// const
const animal = "dog"; // declaración y asignación
// animal = "gato"; // reasignación - TypeError
const animal = "pato"; // redeclaración y reasignación
console.log(animal);

const carros = [];
carros.push("🚗");
console.log(carros);

carros.pop();
console.log(carros);
