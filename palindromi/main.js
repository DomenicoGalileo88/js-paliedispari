/* 
Palidroma

Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

*/


// Palindroma
//Chiedere all’utente di inserire una parola 
let user_word = prompt('Inserisci una parola');
//console.log(user_word);

//Creare una funzione per capire se la parola inserita è palindroma
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


