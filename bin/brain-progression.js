import gameGreeting from '../src/cli.js';
import progressionGame from '../src/games/progression.js';

const userName = gameGreeting();
progressionGame(userName);


