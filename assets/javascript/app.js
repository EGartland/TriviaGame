// Questions
var questionsAnswers = [{
    question: "Which of these mammals has the fastest recorded speed, once clocked at 48 MPH?",
    choices: ["Common Dolphin", "African Elephant", "Red Fox", "Horse"],
    correctAnswer: "Red Fox"
}, {
    question: "Of these species, which one has the longest gestation period?",
    choices: ["Otter", "Hippopotamus", "American Black Bear", "Zebra"],
    correctAnswer: "Zebra"
}, {
    question: "This predator is the largest land carnivore.",
    choices: ["African Lion", "Polar Bear", "Kodiak Bear", "Siberian Tiger"],
    correctAnswer: "Polar Bear"
}, {
    question: "Which of these creatures has the longest sleep cycle at an average of 18 hours?",
    choices: ["Chimpanzee", "Giraffe", "Platypus", "Python"],
    correctAnswer: "Python"
}, {
    question: "Which of these species is the highest jumper?",
    choices: ["Cougar", "Kangaroo", "Mountain Goat", "Great White Shark"],
    correctAnswer: "Cougar"
}];

var panel = $('#quiz-area');


$(document).on('click', '#play', function(){
   game.start();
});
 

$(document).on('click', '#done', function() {
    game.done();
});


var game = {
    correct: 0,
    incorrect: 0,
    counter: 45,
    countdown: function() {
        game.counter--;
        $('#counter-number').html(game.counter);

        if (game.counter == 0) {
            console.log('TIME UP');
            game.done();
            location.reload();
        }
    },
    
    start: function() {
    
      document.getElementById('play').style.display = 'none';

        timer = setInterval(game.countdown, 1000);

        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
        $('#start').remove();


        for (var i = 0; i < questionsAnswers.length; i++) {
            panel.append('<h2>' + questionsAnswers[i].question + '</h2>');
            for (var j = 0; j < questionsAnswers[i].choices.length; j++) {
                panel.append('<p><input type="checkbox" name="question' + '-' + i + '" value="' + questionsAnswers[i].choices[j] + '">' + "     " +questionsAnswers[i].choices[j] + "</p>");
            }
        }

        panel.append('<button class="btn-primary" id="done">Done</button>');
    },

    
    done: function() {

        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() == questionsAnswers[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() == questionsAnswers[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() == questionsAnswers[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val() == questionsAnswers[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val() == questionsAnswers[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

    
        this.result();
    },
    
    result: function() {

        clearInterval(timer);
         document.getElementById('play').style.display = 'block';

        $('#subwrapper h2').remove();
        panel.html('<h2>Times Up!</h2>');
        panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
        panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
        panel.append('<h3>Unanswered: ' + (questionsAnswers.length - (this.incorrect + this.correct)) + '</h3>');
    }

};