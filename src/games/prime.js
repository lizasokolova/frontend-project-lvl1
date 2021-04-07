import readlineSync from 'readline-sync';
import getRandomInt from './utils.js';

function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const primeGame = (userName) => {
    let isSuccess = false;
    for (let i = 0; i < 3; i++) {
        const questionNumber = getRandomInt(0, 500);
        const isQuestionPrime = isPrime(questionNumber);
        console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
        console.log(`Question: ${questionNumber}`);
        const checkResult = readlineSync.question('Your answer: ');
        if (checkResult === "yes" && isQuestionPrime) {
            const win = console.log('Correct!');
            if (i === 2) {
                isSuccess = console.log(`Congratulations, ${userName}!`);
            };
        } else if (checkResult === "no" && !isQuestionPrime) {
            const win = console.log('Correct!');
            if (i === 2) {
                isSuccess = console.log(`Congratulations, ${userName}!`);
            };
        } else {
            console.log(`${checkResult} is wrong answer ;(. Correct answer was another. Let's try again, ${userName}!`);
            break;
        }
    };
};

export default primeGame;