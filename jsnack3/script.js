// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. 
// (Se iniziate con un array da 3 elementi e l'altro da 5, eseguite istruzioni sinchè non ne hanno entrambi 5)


// creo 2 array 
const firstArray = [1, 2, 3];
const secondArray = [1, 2, 3, 4, 5];

// finché nel primo array ci sono meno elementi 
while (firstArray.length < secondArray.length){
    // inserisco un numero 
    let userWord = Number(prompt("Inserire un numero nel primo gruppo."));
    firstArray.push(userWord);
}




console.log(firstArray, secondArray);