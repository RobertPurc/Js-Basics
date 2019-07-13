var exercise = {
    // score: '0',
    program: function (question, answers) {
        console.log('choose answer: ' + answers);
        var promptWindow = prompt(question, 'write answer');
        var score = 1;
        if (promptWindow === this.goodAnswer) {
            console.log('Good answer!' + 'you have ' + score++)
            // this.score + 1;

            // this.score = this.score + 1;
            console.log(this.score);
        } else {
            console.log('Bad!')
        }

    }
}


var exerciseOne = {
    goodAnswer: '2',
}

var exerciseTwo = {
    goodAnswer: '3',
}

var exerciseThree = {
    goodAnswer: '1',
}


var exOne = exercise.program.bind(exerciseOne, 'Whats up?');

var exTwo = exercise.program.bind(exerciseTwo, 'Who I\'m?');

var exThree = exercise.program.bind(exerciseThree, 'What am I doing now?');


var myArray = [Math.floor(Math.random(exOne([' 1-nothing', ' 2-I\'m tired', ' 3-Idk']),
    exTwo(['1-Alien ', '2-human ', '3-programer']),
    exThree(['1-writing ', '2-Slepping ', '3-nothing '])
) * myArray.length)];

// var random = myArray[) * myArray.length)];