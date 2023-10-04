document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", evaluateAnswers);
});

function evaluateAnswers() {
    const answers = {
        q1: "b",
        q2: "c",
        q3: "a",
    };

    const results = document.getElementById("results");

    let score = 0;
    for (const question in answers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === answers[question]) {
                score++;
            }
        }
    }

    results.textContent = `Você acertou ${score} de 3 questões.`;
    
}
