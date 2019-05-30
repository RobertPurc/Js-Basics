var JohnFirstGame = 89;
var JohnSecondGame = 127;
var JohnThirdGame = 103;

var MikeFirstGame = 116;
var MikeSecondGame = 94;
var MikeThirdGame = 123;

var MarryFirstGame = 97;
var MarrySecondGame = 134;
var MarryThirdGame = 102;

var avgJohn = (JohnFirstGame + JohnSecondGame + JohnThirdGame) / 3;

console.log(avgJohn);

var avgMike = (MikeFirstGame + MikeSecondGame + MikeThirdGame) / 3;

console.log(avgMike);

var avgMarry = (MarryFirstGame + MarrySecondGame + MarryThirdGame) / 3;

console.log(avgMarry);

switch (true) {
    case avgJohn > avgMike && avgMarry:
        console.log('John is better');

    case avgJohn < avgMike && avgMarry:
        console.log('Mike is better');

    case avgMarry > avgMike && avgJohn:
        console.log('Marry is better');

}

if (avgJohn === avgMike) {
    console.log('John and mike have equal scores');
} else if (avgJohn === avgMarry) {
    console.log('John and Marry have equal scores');
} else if (avgMike === avgMarry) {
    console.log('Mike and Marry have equal scores');
}


function calculateAge(birthYear) {
    return 2018 - birthYear; //funkcja oblicza lata
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1950);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {

    var age = calculateAge(year); //oblicza lata i wpisuje do year oraz do age
    var retirement = 65 - age; // oblicza emeryturke

    if (retirement > 0) {
        console.log(firstName + 'retires ' + retirement + 'years'); //bierze imie i wiek odjęty od 65
    } else {
        console.log(firstName + 'is already retired')
    }

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1950, 'Mike');
yearsUntilRetirement(1980, 'Jane');
//function declarations
//function whatDoYouDo(job, firstname);



//function expression
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teachers kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon ';
        case 'desinger':
            return firstName + ' designs beautiful websites ';
        default:
            return firstName + 'does something else'
    }
}
console.log(whatDoYouDo('teacher', 'john'));
console.log(whatDoYouDo('designer', 'jane'));
console.log(whatDoYouDo('driver', 'mike'));