import gameGreeting from '../src/cli.js';
import parityCheck from '../src/games/even.js';

const userName = gameGreeting();
parityCheck(userName);