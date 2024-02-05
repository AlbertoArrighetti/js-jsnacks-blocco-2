// Genera un numero casuale tra 1 e 100 
// e poi chiedi all'utente di indovinare il numero. 


// Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" 
// nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.

// Quando l'utente trova il numero, fateglielo sapere!




// genero un numero randomico da 1 a 100 
let computerNumber = Math.floor(Math.random() * 100) + 1;

// creo una flag per interromper il ciclo 
flag = true;


while (flag == true) {
    // chiedo il numero all'utente
  const userTry = Number(prompt("Indovina il numero da 1 a 100:"));



// se il numero è basso 
    if (userTry < computerNumber) {

        alert("Il numero è troppo basso, riprova.");
// altrimenti se è alto 
    } else if (userTry > computerNumber) {

        alert("Il numero è troppo alto, riprova.");
// se è corretto 
    } else {
        alert("Hai indovinato il numero!!");
        // stampo a schermo 
        document.getElementById("result").innerText = "congratulazioni"

        
        
        // interrompo il ciclo 
        flag = false;


        // log 
        console.log("flag =",flag,
        "numero utente ",userTry,
        "numero randomico ", computerNumber,
        );
    
    }
}