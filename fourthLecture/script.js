// function construction\

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}
// every time if i create function construction 
//i have to start with Capital letter




// Person.prototype.calculateAge = function () {
// console.log(2019 - this.yearOfBirth);
// }

Person.prototype.lastName = 'smith';


var john = new Person('john', 1990, 'teacher'); //instatination
// john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');
// jane.calculateAge();

var mark = new Person('Mark', 1948, 'retired');
// mark.calculateAge();

// console.log(john);
// console.log(jane.lastName);
// console.log(mark.lastName);




var Numbers = function (one, two, three) {
    this.one = one;
    this.two = two;
    this.three = three;
}

var calculator = new Numbers(1, 2, 3);

console.log(calculator);

Numbers.prototype.incerase = '*';
Numbers.prototype.devide = '/';



var Family = function (name, surname, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;

}

var robert = new Family('Robert', 'Purc', 2000);

Family.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
}

robert.calculateAge();