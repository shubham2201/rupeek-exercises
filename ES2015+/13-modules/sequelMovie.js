import Movie from './movie.js'

export default class SequelMovie extends Movie {
    constructor ( name, cast, yearOfRelease, boxOfficeCollection, earlierMovies ) {
        super( name, cast, yearOfRelease, boxOfficeCollection);
        this.earlierMovies = earlierMovies;
    }

    getLifetimeEarnings () {
        let sum=this.boxOfficeCollection;

        this.earlierMovies.forEach(movie => {
            sum += movie.boxOfficeCollection;
        })

        return sum;
    }
}