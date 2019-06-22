calculateAge(1990);

function calculateAge(year) {
    console.log(2016 - year)
}
calculateAge(1990); //function declaration works everywhere you wolud put 

//retirement(1990); //there does not work 
var retirement = function (year) {
    console.log(65 - (2016 - year));
}

retirement(1990); // works only after functions expression

var age = 60;

console.log(age) // also wokrs after, before declaration ll be undifinded, js know is smoething but doesn t know what :/

function foo() {
    var age = 10; // and that belongs to function execution obiect and 
    //that is the answer why we se 2 diffrent scores despite the same variables
    console.log(age);
}

var age = 20; //   that var belongs to global execute context