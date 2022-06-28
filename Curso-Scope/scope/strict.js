'use strict'; //COn el modo estricto se tiene que declarar y asignar obligatoriamente
pi = 3.1416;
console.log(pi);

function MyFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(MyFunction());