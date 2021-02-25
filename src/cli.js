import readlineSync from 'readline-sync';

// const name = readlineSync.question('Your answer: ');

const gameGreeting = () => {
    console.log(`May I have your name?`);
    const userName = readlineSync.question('Your answer: ');
    console.log(`Hello, ${userName}`);
};

export default gameGreeting;