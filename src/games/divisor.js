import readlineSync from 'readline-sync';
import getRandomInt from './utils.js';

const calculateGCD = (a, b) => {
    if (!b) {
        return a;
    }

    return calculateGCD(b, a % b);
};

const divisorGame = (userName) => {
    let isSuccess = false;
    for (let i = 0; i < 3; i++) {
        const firstNumber = getRandomInt(0, 100);
        const secondNumber = getRandomInt(0, 100);
        console.log('Find the greatest common divisor of given numbers.');
        console.log(`Question: ${firstNumber} ${secondNumber}`);
        const checkResult = readlineSync.question('Your answer: ');
        const gcd = calculateGCD(firstNumber, secondNumber);
        if (calculateGCD(firstNumber, secondNumber) == checkResult) {
           const win = console.log('Correct!');
           if (i === 2) {
            isSuccess = console.log(`Congratulations, ${userName}!`);
           };
        } else {
            console.log(`${checkResult} is wrong answer ;(. Correct answer was ${gcd}. Let's try again, ${userName} !`);
            break;
        };
    };
};

export default divisorGame;