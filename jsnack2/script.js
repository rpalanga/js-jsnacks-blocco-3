
/*
Snack 2:
Scrivi una funzione che fonda due array presi come parametri 

(date per scontato che abbiano lo stesso numero di elementi)

 prendendo alternativamente gli elementi da uno e dall’altro

es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

let firstArray = [0,1,2,3];
let secondArray = [`a`,`b`,`c`,`d`];
let thirdArray =[];

const mixedArrey = function (firstA, secondA){

   
    for (let i = 0; i < firstArray.length; i++){

        thirdArray.push(firstA[i]);
        thirdArray.push(secondA[i]);
        
    }
    return thirdArray;
};


let result = mixedArrey(firstArray, secondArray)
console.log(result)

document.getElementById("result").innerHTML = `Il risultato è questo ${result}`
