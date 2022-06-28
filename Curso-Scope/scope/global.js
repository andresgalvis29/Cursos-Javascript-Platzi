//Variables 

var a; //Declaracion de variable a
var b = 'b' // Asignando a la variable b

b = 'bebe' //Reasignacion variable
var a = 'aaa'//Redeclaracion de variables           

//Global Scope -- variables que estan dentro del documento

var fruit = 'apple'//global

function bestFruit() {
    console.log(fruit);
}

bestFruit()

function Countries() {
    country = 'colombia' //esto es global ya que no se ha declarado
    console.log(country)
}

Countries()
console.log(country)