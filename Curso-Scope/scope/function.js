function greeting () {
    let userName = 'Andres';
    console.log(userName);

    if (userName == 'Andres') {
        console.log('Hello ' + userName);
    }
}

greeting();
//lA VARIABLE NO SIRVE PORQUE SU DECLARACION Y ASGINACION ESTA DENTRO DE LA FUNCION POR LO TANTO NO ES GLOBAL
console.log(userName)