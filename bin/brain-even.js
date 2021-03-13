import gameGreeting from '../src/cli.js';
import parityCheck from '../src/parity-check.js';

const userName = gameGreeting();
parityCheck(userName);