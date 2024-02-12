/*
Snack 1:
Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")
*/

const reverseWord = function (word){
    let inputWord = word.split("").reverse().join("");
    return inputWord;
};

let inputWord = reverseWord("Federico")

document.getElementById("result").innerHTML = `IL Risultato è ${inputWord}`



