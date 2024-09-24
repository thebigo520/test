function checkAnswers() {
    // 获取输入的答案
    const answer1 = parseInt(document.getElementById('answer1').value);
    const answer2 = parseInt(document.getElementById('answer2').value);
    const answer3 = parseInt(document.getElementById('answer3').value);

    // 验证答案是否正确
    if (answer1 === 5 && answer2 === 6 && answer3 === 8) {
        document.getElementById('result').textContent = '答案全部正确！';
        showRandomNumber();
    } else {
        document.getElementById('result').textContent = '请检查您的答案，部分答案错误。';
        document.getElementById('random-number').textContent = '';
    }
}

function showRandomNumber() {
    const numbers = [
        '123456', '789012', '345678', '901234', '567890',
        '234567', '890123', '456789', '123789', '456123'
    ];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    document.getElementById('random-number').textContent = '随机数字: ' + numbers[randomIndex];
}
