//Pari e Dispari

/* 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// funzione che stabilisce se un numero è pari o dispari
function pari_o_dispari(numero_da_verificare) {
    if (numero_da_verificare % 2 == 0) {
        return true;
    } else {
        return false
    }
};

//Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
function genera_numero_random_da_1_a_5() {
    return Math.floor(Math.random() * 6);
};

//Funzione che somma due numeri
function somma(primo_numero, secondo_numero) {
    return primo_numero + secondo_numero;
};


//L'utente sceglie pari o dispari
let submit = document.getElementById('submit');

submit.addEventListener('click', function(event) {
    event.preventDefault();

    let scelta = document.getElementById('scelta');
    //console.log(scelta.value);

    // l'utente inserisce un numero da 1 a 5
    let numero = document.getElementById('numero_utente');
    let numero_utente = parseInt(numero.value) ;
    //console.log(`numero utente inserito è ${numero_utente}`);

    let numero_random = genera_numero_random_da_1_a_5();
    //console.log(numero_random);

    let somma_utente_e_computer = somma(numero_utente, numero_random);
    //console.log(`la somma utente e computer è ${somma_utente_e_computer}`);

    //Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
    let risultato_pari_o_dispari = pari_o_dispari(somma_utente_e_computer);
    //console.log(risultato_pari_o_dispari);

    //Dichiariamo chi ha vinto.
    if ((risultato_pari_o_dispari == true) && (scelta.value == 'pari')) {
        console.log('Hai vinto');
        console.log(`Tuo numero: ${numero_utente}`);
        console.log(`Numero computer: ${numero_random}`);
        console.log(`La somma dei due numeri è: ${somma_utente_e_computer}`);
    } else if ((risultato_pari_o_dispari == false) && (scelta == 2)) {
        console.log('Hai vinto');
        console.log(`Tuo numero: ${numero_utente}`);
        console.log(`Numero computer: ${numero_random}`);
        console.log(`La somma dei due numeri è: ${somma_utente_e_computer}`);
    } else {
        console.log('Ha vinto il computer');
        console.log(`Tuo numero: ${numero_utente}`);
        console.log(`Numero computer: ${numero_random}`);
        console.log(`La somma dei due numeri è: ${somma_utente_e_computer}`);
    }

});
