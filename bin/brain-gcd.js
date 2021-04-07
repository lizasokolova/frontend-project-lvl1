import gameGreeting from '../src/cli.js';
import divisorGame from '../src/games/gcd.js';

const userName = gameGreeting();
divisorGame(userName);
