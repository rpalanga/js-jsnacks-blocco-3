
/*
Snack 3:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).

*/

let numberArray = [0,1,2,3,4,5,6];


const rangeArray = function (array , min , max){

    let mixArray = [];
    

    for( let i = min; i <= max; i++){

        mixArray.push(array[i])

    }

    return mixArray;
};

let newArray = rangeArray(numberArray, 2, 5)
console.log(newArray)

document.getElementById("result").innerHTML = `Il numero degli elementi è ${newArray}`

// console.log(rangeArray(mixArrry, 2,5))

