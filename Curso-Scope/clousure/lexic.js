const global = 0;

function myFunction () {
    const myConst = 1;
    console.log (global);

    function parent () { //Funcion Interna
        const inner = 2;
        console.log(myConst,global);

        function child () { //Funcion interna a la Funcion interna
            console.log(inner,myConst,global);
        }
        return child(); //Recordar retornar la funcion
    }
    return parent();
}

myFunction();