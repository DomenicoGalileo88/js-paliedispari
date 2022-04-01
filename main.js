/* 
Palidroma

Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Non reinventate la ruota, per generare un numero random tra un minimo e un massimo usate quella che trovate su W3School.
*/


// Palindroma
//Chiedere all’utente di inserire una parola 
let user_word = prompt('Inserisci una parola');
//console.log(user_word);

//Creare una funzione per capire se la parola inserita è palindroma Pari e Dispari
function parolapalindroma(user_word) {
    
    //trasformare la parola in un array scomposto in singole lettere
    let word_in_array = user_word.split('');
    //console.log(word_in_array);

    // capovolgere le lettere dell'array
    let word_in_arry_reverse = word_in_array.reverse('');
    //console.log(word_in_arry_reverse);

    // ricomporre le lettere in una parola (la parola sarà l'inverso di quella inserita)
    let user_word_reverse = word_in_arry_reverse.join('');
    //console.log(user_word_reverse);

    // verificare se la parola è palindroma
    if (user_word === user_word_reverse) {
        return true;
    } else {
        return false;
    }
}

if (parolapalindroma(user_word) === true) {
    console.log('La parola inserita è palindroma');
} else {
    console.log('La parola inserita non è palindroma');
}





