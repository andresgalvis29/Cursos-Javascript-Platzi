//MANERA QUE NO SIRVE PARA HACER LA FUNCION ALCANCIA

// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log('moneyBox : $' + saveCoins);
// }

// moneyBox(5);
// moneyBox(4);


//MANERA CORRECTA

//Funcion Principal
function myMoneyBox() {
    let saveCoins = 0;
    function countCoins(coins) { //Funcion Interna
        saveCoins += coins;
        console.log('MoneyBox: $' + saveCoins);
    }    
    return countCoins;
}

const MoneyBox = myMoneyBox(); //Asignar una constante como funcion 
MoneyBox(5); //Y a esa constante le pasamos el parametro requerido por nuestra funcion interna
MoneyBox(5);

const moneyBoxAna = myMoneyBox(); //Se le pueden asignar la funcion a varias constantes
moneyBoxAna(5);
moneyBoxAna(7);