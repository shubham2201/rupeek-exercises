class Movie {
    constructor ( name, cast, yearOfRelease, boxOfficeCollection ) {
        this.name = name;
        this.cast = cast;
        this.yearOfRelease = yearOfRelease;
        this.boxOfficeCollection = boxOfficeCollection;
    }

    addToCast( newMember ) {
        this.cast.push(newMember);
    }

    addToCollection( amount ) {
        this.boxOfficeCollection += amount;
    }
};

class SequelMovie extends Movie {
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

const movie1 = new Movie('War', ['HR', 'TS', 'DP'], 2019, 200);
const movie2 = new SequelMovie('War2', ['HTR', 'TS', 'DP'], 2020, 300, [movie1]);
const movie3 = new SequelMovie('War3', ['HR', 'HTR', 'TS', 'DP'], 2021, 400, [movie1, movie2]);

console.log( movie3.getLifetimeEarnings());