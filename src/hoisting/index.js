// HOISTING EN VAR
// var nameOfDog; //undefined

// console.log(nameOfDog);
// var nameOfDog = "Elmo";
// console.log(nameOfDog);

// HOISTING EN FUNCION
// var elmo; //undefined
// function nameOfDog() {
//   console.log(`El mejor perrito es ${elmo}`);
// }
nameOfDog(); // 3

// 2
function nameOfDog() {
  console.log(`El mejor perrito es ${elmo}`);
}

var elmo = "Elmito"; // 1
