/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function saluto (nome){
    const orario = new Date();
    const hours = orario.getHours();
    const minutes = orario.getMinutes();
    if(hours >= 4 && hours < 13){
        console.log ("Buongiorno " + nome + ", sono le " + hours + ":" + minutes);    
    } else if(hours >= 13 && hours <= 17){
        console.log ("Buon pomerigio " + nome + ", sono le " + hours + ":" + minutes);
    } else{
        console.log ("Buona sera " + nome + ", sono le " + hours + ":" + minutes);
    }
         
}

// Invoca la funzione qui e stampa il risultato in console
const nome = prompt("Inserisci la persona da salutare");
saluto (nome);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.