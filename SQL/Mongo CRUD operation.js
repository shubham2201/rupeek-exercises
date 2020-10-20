//CRUD OPERATIONS: Create a moviesDB with an albums collection. The albums lists
// out year of release, music director, lyricist and a list of songs. Every song has details of
// singers (names), length of song (string).
// a) Insert 3 documents with at least 1 song entry each
// b) Update album data for an album. Change the name of the lyricist, and also an entirely
// replaced history entry.
// c) Find all albums released before 2019
// d) Remove all documents that have a particular music director / lyricist as value

usemovieDB;

db.album.insertOne({
    yearOfRelease: 2020,
    musicDirector: 'Saurabh',
    lyricist: 'Singh jee',
    listOfSongs: [
        {
            name: 'AA',
            singer: 'Arjit',
            length: 5
        },
        {
            name: 'AB',
            singer: 'Sonu',
            length: 4
        }
    ]
});

db.album.insertOne({
    yearOfRelease: 2015,
    musicDirector: 'Juhi',
    lyricist: 'Shubham',
    listOfSongs: [
        {
            name: 'Ruka jaa',
            singer: 'Ankit',
            length: 5
        },
        {
            name: 'Chale ja',
            singer: 'Arhit',
            length: 4
        }
    ]
});

db.album.replaceOne(
    { musicDirector: 'Shubham' },
    {
        yearOfRelease: 2021,
        musicDirector: 'Shubham',
        lyricist: 'Nahi pata',
        listOfSongs: [
            {
                name: 'Ruka jaa 2',
                singer: 'Ankit',
                length: 6
            },
            {
                name: 'Chale ja 2',
                singer: 'Arhit',
                length: 7
            }
        ]
    }
);

db.album.find().pretty();



