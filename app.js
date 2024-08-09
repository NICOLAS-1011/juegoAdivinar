let num = numAleatorio();
let intentos = 0;
console.log(num)

function asignar(para, resultado) {
    let obj = document.querySelector(para);
    obj.innerHTML = resultado;
}

function intento() {
    
    let numUsu = parseInt(document.getElementById('entrada').value);
    intentos++;

    //num == numUsu ? asignar(p, "acertaste :D") : asignar(p, "Incorrecto");
    if(num == numUsu){
        asignar('p', `acertaste :D, en: ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else if(numUsu > num){
        asignar('p', 'Es menor')
    } else if(numUsu < num){
        asignar('p', 'Es mayor')
    }

    limpiar();

    return;
}

function nuevo() {
    limpiar();
    num = numAleatorio();
    intentos = 0;
    asignar('p', 'Numero del 1 a 10');
    //document.getElementById('reiniciar').setAttribute('disabled');
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function limpiar() {
    document.querySelector('#entrada').value = '';
    
}

function numAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

asignar('h1', 'Texto otra ve')
asignar('p', 'Ingresa un Numero: ')