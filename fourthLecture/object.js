// Object.create

var personProto = {
    calculateAge: function () {
        console.log(2019 - this.yearOfBirth);
    }
}

//no Capital P because is not a Function construction ;)

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1999;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {
        value: 'jane'
    },
    yearOfBirth: {
        value: 1969
    },
    job: {
        value: 'designer'
    }
})
john.calculateAge();
jane.calculateAge();