import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const countingGame = (userName) => {
    for (let i = 0; i < 3; i++) {
        const firstNumber = getRandomInt(0, 100);
        const secondNumber = getRandomInt(0, 100);
        console.log('What is the result of the expression?');
        console.log(`Question: ${firstNumber} + ${secondNumber}`);
        const checkResult = readlineSync.question('Your answer: ');
        if (firstNumber + secondNumber == checkResult) {
            console.log('Correct!');
        } else {
            console.log(`${checkResult} is wrong answer ;(. Correct answer was another. Let's try again, ${userName}!`);
            break;
        };
        console.log(`Congratulations, ${userName}!`);
    };
};

export default countingGame;
