import gameGreeting from '../src/cli.js';
import countingGame from '../games/counting-game.js';

const userName = gameGreeting();
countingGame(userName);