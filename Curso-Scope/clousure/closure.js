function gretings() {
    let username = 'oscar'

    function displayUsername () {
        return 'Hello' + username;
    }

    return displayUsername;
}

const hi = gretings();
console.log(hi) //Retornamos la definicion de la funcion
console.log(hi()) //Aqui retornamos el valor y contexto de la funcion