
    document.getElementById('check-answers-button').addEventListener('click', function() {
        var correctAnswers = 0;

        var q1Answer = document.querySelector('input[name="q1"]:checked');
        if (q1Answer && q1Answer.value === 'c') {
            correctAnswers++;
        }

        var q2Answer = document.querySelector('input[name="q2"]:checked');
        if (q2Answer && q2Answer.value === 'c') {
            correctAnswers++;
        }

        var q3Answer = document.querySelector('input[name="q3"]:checked');
        if (q3Answer && q3Answer.value === 'b') {
            correctAnswers++;
        }

        var q4Answer = document.querySelector('input[name="q4"]:checked');
        if (q4Answer && q4Answer.value === 'a') {
            correctAnswers++;
        }

        var q5Answer = document.querySelector('input[name="q5"]:checked');
        if (q5Answer && q5Answer.value === 'a') {
            correctAnswers++;
        }

        var q6Answer = document.querySelector('input[name="q6"]:checked');
        if (q6Answer && q6Answer.value === 'a') {
            correctAnswers++;
        }

        var q7Answer = document.querySelector('input[name="q7"]:checked');
        if (q7Answer && q7Answer.value === 'b') {
            correctAnswers++;
        }

        var q8Answer = document.querySelector('input[name="q8"]:checked');
        if (q8Answer && q8Answer.value === 'a') {
            correctAnswers++;
        }

        var q9Answer = document.querySelector('input[name="q9"]:checked');
        if (q9Answer && q9Answer.value === 'a') {
            correctAnswers++;
        }

        var q10Answer = document.querySelector('input[name="q10"]:checked');
        if (q10Answer && q10Answer.value === 'b') {
            correctAnswers++;
        }

        var resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = 'Você acertou ' + correctAnswers + ' de 10 questões.';
    });

