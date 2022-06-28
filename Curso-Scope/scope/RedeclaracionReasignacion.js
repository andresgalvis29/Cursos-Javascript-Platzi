var firstName; //Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = 'David'; // Declarar - Asignar
lastName = 'Ana'; //Reasignar

var secondName = 'David'; // Declarando / Asignando
var secondName = 'Andres'; // Redeclarar / Reasignar

console.log(secondName);

//Let --> el let no se puede redeclarar varibles
let  fruit = 'Apple';
fruit = 'Kiwi';
//let fruit = 'Banana' --> ERROR
console.log(fruit);

//const --> en const no se puede reasignar ni redeclarar
const animal = 'dog'; //declara y asigna
// animal = 'cat'; --> ERROR
//const animal = 'snake'; --> ERROR

const vehicles = [];
vehicles.push('carro');
console.log(vehicles);

vehicles.pop('carro');
console.log(vehicles);

