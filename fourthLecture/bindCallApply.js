var john = {
    name: 'john',
    age: 26,
    job: 'teacher',

    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' Laides and gentelmen I\'m ' +
                this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age +
                ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey What\'s up? ' + 'I\'m ' +
                this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age +
                ' years old.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

var amy = {
    name: 'Amy',
    age: 18,
    job: 'web dev'
}

john.presentation('friendly', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');
// method borrowing

// john.presentation.apply(emily, ['friendly ' , 'afternoon'])
//this doesnt work because we dont have any array in the function


var johnFriendly = john.presentation.bind(amy, 'formal')
//bind create a copy of ur funcion and also can be stored ;)

johnFriendly('morning');
johnFriendly('afternoon');