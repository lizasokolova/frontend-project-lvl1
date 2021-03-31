import gameGreeting from '../src/cli.js';
import primeGame from '../src/games/prime.js';

const userName = gameGreeting();
primeGame(userName);

