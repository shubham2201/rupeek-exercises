import Movie from './movie.js';
import SequelMovie from './sequelMovie.js';

const movie1 = new Movie('War', ['HR', 'TS', 'DP'], 2019, 200);
const movie2 = new SequelMovie('War2', ['HTR', 'TS', 'DP'], 2020, 300, [movie1]);
const movie3 = new SequelMovie('War3', ['HR', 'HTR', 'TS', 'DP'], 2021, 400, [movie1, movie2]);

console.log( movie3.getLifetimeEarnings());

export {
    movie1,
    movie2,
    movie3
};