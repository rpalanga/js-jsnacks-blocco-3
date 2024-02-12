
/*
Snack 4 (bonus):
Scrivi una funzione  che accetti una stringa come parametro e 

restituisca la stringa con i caratteri ordinati alfabeticamente

*/

const orderedWord = function (word){
    let inputWord = word.split("").sort().join("");
    return inputWord;
};

let inputWord = orderedWord(prompt("inserisci la parola"))

document.getElementById("result").innerHTML = `Il risultato della parola è ${inputWord}`
console.log(inputWord)