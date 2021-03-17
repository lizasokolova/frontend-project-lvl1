import readlineSync from 'readline-sync';
import getRandomInt from './utils.js';

// function egcd(a, b) {
//     if (a == 0)
//         return b;

//     while (b != 0) {
//         if (a > b)
//             a = a - b;
//         else
//             b = b - a;
//     }

//     return a;
// }

const divisorGame = (userName) => {
    for (let i = 0; i < 3; i++) {
        const firstNumber = getRandomInt(0, 100);
        const secondNumber = getRandomInt(0, 100);
        console.log('Find the greatest common divisor of given numbers.');
        console.log(`Question: ${firstNumber} ${secondNumber}`);
        const checkResult = readlineSync.question('Your answer: ');
        if ( == checkResult) { }
    };
};

export default divisorGame;


// const countingGame = (userName) => {
//     for (let i = 0; i < 3; i++) {
//         const firstNumber = getRandomInt(0, 100);
//         const secondNumber = getRandomInt(0, 100);
//         console.log('What is the result of the expression?');
//         console.log(`Question: ${firstNumber} + ${secondNumber}`);
//         const checkResult = readlineSync.question('Your answer: ');
//         if (firstNumber + secondNumber == checkResult) {
//             console.log('Correct!');
//         } else {
//             console.log(`${checkResult} is wrong answer ;(. Correct answer was another. Let's try again, ${userName}!`);
//             break;
//         };
//         console.log(`Congratulations, ${userName}!`);
//     };
// };

// export default countingGame;
