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

const movie1 = new Movie('War', ['HR', 'TS', 'DP'], 2019, 200);
movie1.addToCast( 'Shubham' );
movie1.addToCollection(100);
console.log(movie1);