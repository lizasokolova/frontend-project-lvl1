import gameGreeting from '../src/cli.js';
import divisorGame from '../games/divisor-game.js';

const userName = gameGreeting();
divisorGame(userName);
