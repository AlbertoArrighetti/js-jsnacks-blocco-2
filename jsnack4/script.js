// Inserisci un numero, se è pari stampa il numero, 
// se è dispari stampa il numero successivo.


// numero scelto
let userNumber = Number(prompt("Inserire un numero."));

// variabile per il risultato
let result;

// se il numero è pari 
if (userNumber % 2 == 0) {
    // stampa il numero
    result = userNumber;


    // risultato
    document.getElementById("result").innerHTML = "IL tuo numero: " + result + " è pari.";

// se è dispari 
} else {

    // aggiungi un 1 
    result = (userNumber + 1);

     // risultato
     document.getElementById("result").innerHTML = `Il tuo numero: ${userNumber} è dispari. Il numero pari successivo è ${result}`; 
}

