// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.

// Continua a chiedere i numeri all’utente e a inserirli nell’array
// fino a quando la somma degli elementi è minore di 50


// array vuoto 
let numbersArray = [];

// inizializzo la somma 
let sum = 0;


// fai queste azioni
do{
    // chiedo di inserire un numero 
    let number = Number(prompt("inserire un numero:"));
    
    if(isNaN(number)){
        // se non è un numero 
        alert("inserire solo caratteri numerici.")
    }else {
        // se lo è
        // inserisco il numero nell'array 
        numbersArray.push(number);
        // lo sommo per vedere se è < 50
        sum += number;
    }
    
    
    // log da rimuovere 
    console.log(sum, number, numbersArray);
    
    
// Finché la somma è < 50
}while (sum < 50) ;


document.getElementById("result").innerHTML = "I numeri da te inseriti sono: " + numbersArray + "<br> la somma è: " + sum ;
