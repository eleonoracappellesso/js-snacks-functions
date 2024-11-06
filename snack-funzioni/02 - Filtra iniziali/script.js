/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
console.log(names);

// Dichiara la funzione qui.
function filterInitials(haystack, needle){
    const newArray = [];
    for(let i = 0; i < haystack.length; i++) {
        const initial = haystack[i][0];
        if(initial.toLowerCase() === needle.toLowerCase()){
            newArray.push(haystack[i]);
        }
    }
    return newArray
}

// Invoca la funzione qui e stampa il risultato in console

const filteredNames = filterInitials(names, 'a');
console.log(filteredNames);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]