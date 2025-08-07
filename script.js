document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quizForm');
    const quizContainer = document.getElementById('quizContainer');
    const questionInput = document.getElementById('question');
    const answerInput = document.getElementById('answer');

    // 用来存储已提交的题目和答案
    let quizData = [];

    // 处理表单提交
    quizForm.addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止表单默认提交

        // 获取用户输入的题目和答案
        const question = questionInput.value.trim();
        const answer = answerInput.value.trim();

        // 检查是否填写了题目和答案
        if (!question || !answer) {
            alert('请输入问题和答案！');
            return;
        }

        // 将新题目添加到 quizData 数组
        quizData.push({ question, answer });

        // 更新页面显示所有题目
        displayQuizQuestions();

        // 清空输入框
        questionInput.value = '';
        answerInput.value = '';
    });

    // 显示所有已提交的问题和答案
    function displayQuizQuestions() {
        quizContainer.innerHTML = ''; // 清空显示区域

        // 遍历 quizData 数组并显示题目和答案
        quizData.forEach((quiz, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('quiz-item');
            questionElement.innerHTML = `
                <strong>问题 ${index + 1}:</strong> ${quiz.question} <br>
                <strong>答案:</strong> ${quiz.answer}
            `;
            quizContainer.appendChild(questionElement);
        });
    }
});
