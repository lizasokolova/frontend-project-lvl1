import gameGreeting from '../src/cli.js';
import countingGame from '../src/games/calc.js';

const userName = gameGreeting();
countingGame(userName);