/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
console.log('La parola è', word);

// Dichiara la funzione qui.
function countVowels(myWord){
    const vowels = "aeiou";
    let count = 0;
    for(let i = 0; i < myWord.length; i++){
        if(vowels.includes(myWord[i])){
            count += 1;
        }
    }
    return count;
}

// Invoca la funzione qui e stampa il risultato in console

const totalVowels = countVowels(word);
console.log('Nella parola ci sono', totalVowels, 'vocali');

//Risultato atteso se si passa 'javascript': 3 (a, a, i)