import readlineSync from 'readline-sync';
import getRandomInt from './utils.js';

const parityCheck = (userName) => {
    for (let i = 0; i < 3; i++) {
        console.log('Answer "yes" if the number is even, otherwise answer "no".');
        const comparisonNumber = getRandomInt(1, 500);
        console.log(`Question: ${comparisonNumber}`);
        const checkResult = readlineSync.question('Your answer: ');

        if (comparisonNumber % 2 == 0 && checkResult === 'yes') {
            console.log('Correct!');
        } else if (comparisonNumber % 2 != 0 && checkResult === 'no') {
            console.log('Correct!');
        } else {
            console.log(`${checkResult} is wrong answer ;(. Correct answer was another. Let's try again, ${userName}!`);
            break;
        };
        console.log(`Congratulations, ${userName}!`);
    };
};


export default parityCheck;
