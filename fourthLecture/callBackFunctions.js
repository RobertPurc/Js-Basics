var years = [1990, 1989, 1968, 1999, 2000];


function arrayCalc(arr, fn) { //funkcja z dwoma parametrami
    var arrResult = []; // tworzy tablice 
    for (var i = 0; i < arr.length; i++) { // bierze elementy od 0 do długości tablicy czyli tutuaj 5
        arrResult.push(fn(arr[i])); // wrzuca te elemety w tablice arrResult a drugi parametr czyli 
    } //fn później wywołany robi coś z każdym elementem tabliczy czyli i
    return arrResult; // po tem zwaraca tą obliczoną tablice
}

function calculateAge(el) { //funkcja która będzie parametrem
    return 2019 - el;
}

function isFullAge(el) { // -.-
    return el >= 18;
}


var ages = arrayCalc(years, calculateAge); // pierwszy parametr to tablica z wiekiem następna odejume 2019 od elemetów tej tablicy
console.log(ages); // czyli każdy element tablicy zostaje obliczony przez fn czyli calculateAge 
// a po tem wrzucony do nowej tablicy która zostaję wrzucona
var old = arrayCalc(ages, isFullAge);
console.log(old);

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);