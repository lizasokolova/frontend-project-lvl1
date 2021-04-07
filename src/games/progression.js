import readlineSync from 'readline-sync';
import getRandomInt from './utils.js';


const getProgression = (progressionStart, progressionStep, progressionLength) => {
    const progression = [progressionStart];
    for (let i = 0; i < progressionLength - 1; i += 1) {
        progression.push(progression[i] + progressionStep);
    }
    const hiddenIndex = getRandomInt(0, progressionLength - 1);
    const hiddenNumber = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    return {
        progression: progression,
        hiddenNumber: hiddenNumber
    };
};


const progressionGame = (userName) => {
    let isSuccess = false;
    for (let i = 0; i < 3; i++) {
        const { progression, hiddenNumber } = getProgression(getRandomInt(1, 5), getRandomInt(1, 5), getRandomInt(5, 30));
        console.log('What number is missing in the progression?');
        console.log(`Question: ${progression}`);
        const checkResult = readlineSync.question('Your answer: ');

        if (hiddenNumber == checkResult) {
            const win = console.log('Correct!');
            if (i === 2) {
                isSuccess = console.log(`Congratulations, ${userName}!`);
            };
        } else {
            console.log(`${checkResult} is wrong answer ;(. Correct answer was ${hiddenNumber}. Let's try again, ${userName}!`);
            break;
        };
    };
};

export default progressionGame;
