import readlineSync from 'readline-sync';
import getRandomInt from './utils.js';

const countingGame = (userName) => {
    for (let i = 0; i < 3; i++) {
        const firstNumber = getRandomInt(0, 100);
        const secondNumber = getRandomInt(0, 100);
        const randomIndex = getRandomInt(0, 2);
        const cases = [['+', firstNumber+secondNumber], ['-', firstNumber-secondNumber], ['*',firstNumber*secondNumber]];
        console.log('What is the result of the expression?');
        console.log(`Question: ${firstNumber} ${cases[randomIndex][0]} ${secondNumber}`);
        const checkResult = readlineSync.question('Your answer: ');
        if (cases[randomIndex][1]) {
            console.log('Correct!');
        } else {
            console.log(`${checkResult} is wrong answer ;(. Correct answer was another. Let's try again, ${userName}!`);
            break;
        };
        console.log(`Congratulations, ${userName}!`);
    };
};

export default countingGame;
