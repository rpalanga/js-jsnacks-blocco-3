/*

Snack 5 (bonus):

Scrivi una funzione che accetti una stringa come parametro e 

restituisca la stessa stringa ma con le iniziali delle parole tutte in maiuscolo

*/


const str = "nel mezzo del cammin di nostra vita.";

const stringToArray = str.split(" ");


const conversion =  function (word){

    for (i = 0; i < word.length; i++){

        word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1);

        
    }

    const newString = word.join(" ");
    
    return newString;
};

let finalConversion = conversion(stringToArray)

document.getElementById("result").innerHTML = `Questo è il risultato: ${finalConversion}`;

console.log(finalConversion)





