//Pari e Dispari

/* 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// funzione che stabilisce se un numero è pari o dispari

function pari_o_dispari(numero_utente) {
    if (numero_utente % 2 == 0) {
        return true;
    } else {
        return false
    }
}

//------L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.-------

//L'utente sceglie pari o dispari



// l'utente inserisce un numero da 1 a 5
let numero_utente = parseInt(prompt('Inserisci un numero da 1 a 5'));



//Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).

function genera_numero_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Sommiamo i due numeri

function somma(primo_numero, secondo_numero) {
    return primo_numero + secondo_numero;
}



//Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)




//Dichiariamo chi ha vinto.


