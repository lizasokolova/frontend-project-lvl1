import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const parityCheck = (userName) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const comparisonNumber = getRandomInt(1, 500);
    console.log(`Question: ${comparisonNumber}`);
    const checkResult = readlineSync.question('Your answer: ');

    if (comparisonNumber % 2 == 0 && checkResult === 'yes') {
        console.log(`Correct! Congradulations, ${userName}!`);
    } else if (comparisonNumber % 2 != 0 && checkResult === 'no') {
        console.log(`Correct! Congradulations, ${userName}!`);
    } else {
        console.log(`Sorry ${userName}! It is a mistake. Please try again...`);
    };
};

export default parityCheck;
