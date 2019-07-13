function retirement(retirementAge) {
    var a = 'years left until retirement';
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}

var retirementUsa = retirement(66);
retirementUsa(1990);


function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what is UX design?')

        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?')

        } else {
            console.log('what do you do' + name + '?')
        }
    }
}

interviewQuestion('teacher')('John');