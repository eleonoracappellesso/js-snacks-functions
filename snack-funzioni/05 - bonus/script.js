/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const time = new Date().getHours();
console.log('Sono le ore:', time);

// Dichiara la funzione qui.
function printHello(personName) {
    if (time > 0 && time <= 13) {
        console.log(`Buongiorno`, personName);
    } else if( time > 13 && time <= 17){
        console.log(`Buon pomeriggio`, personName);
    } else {
        console.log(`Buonasera`, personName);
    }
}

// Invoca la funzione qui e stampa il risultato in console

printHello(name);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.