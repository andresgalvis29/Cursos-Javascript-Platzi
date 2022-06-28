function fruits() {
    if (true) { //Block scope: que son variables que solo funcionan dentro de un bloque
        var fruit1 = 'Apple';//Function scope
        let fruit2 = 'Kiwi'; //BLock Scope --- Solo funciona dentro de el bloque {}
        const fruit3 = 'Banana';//Block Scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
    

}

fruits();