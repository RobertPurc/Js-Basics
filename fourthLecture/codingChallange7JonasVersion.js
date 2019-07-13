(function () {

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }

    }

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('Correct answer!');

            sc = callback(true);


        } else {
            console.log('wrong answer. Try again')
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function (score) {
        console.log('your current score is: ' + score);
        console.log('_________________________________');
    }



    var qOne = new Question('is JavaScript the coolest programing in the woorld?',
        ['yes', 'no'], 0);


    var qTwo = new Question('Waht the name of this course\'s teacher',
        ['john', 'michel', 'jonas'], 2);

    var qthree = new Question('what does best describe coding?',
        ['boring', 'fun ', 'tedious'], 2);

    var questions = [qOne, qTwo, qthree];


    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++
            }

            return sc;
        }
    }

    var keepScore = score();


    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);


        questions[n].displayQuestion();


        var answer = prompt('please select the correct answer', 'if you want exit write exit');


        if (answer !== 'exit') {

            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }


    }

    nextQuestion();

})();