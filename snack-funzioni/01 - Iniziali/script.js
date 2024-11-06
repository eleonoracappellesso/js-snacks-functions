/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
console.log(names);


// Dichiara la funzione qui.
function firstLetter(myArray) {
    const newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        newArray.push(myArray[i][0]);
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

const initials = firstLetter(names);
console.log(initials);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]