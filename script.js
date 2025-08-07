// script.js

const questions = [
    "1. 1 + 1 = ?",
    "2. 3 * 4 = ?",
    "3. 5 + 2 = ?",
    "4. 9 - 6 = ?",
    "5. 6 * 2 = ?",
    "6. 7 + 8 = ?",
    "7. 3 + 5 = ?",
    "8. 4 * 3 = ?",
    "9. 6 - 2 = ?",
    "10. 8 / 2 = ?",
    // ... 繼續添加更多題目，直到 1000 題
];

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

document.getElementById("new-question-btn").addEventListener("click", function() {
    const question = getRandomQuestion();
    document.getElementById("question").innerText = question;
});
