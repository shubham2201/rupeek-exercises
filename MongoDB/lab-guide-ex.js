// iv) Find shows that have genre Drama but not Horror. Again, find shows that have
// genre Horror but not Drama.

db.shows.find({
    $or:[{
        genres:{
            $in: ['Drama'],
            $nin: ['Horror']
        }
    },
    {
        genres:{
            $in:['Horror'],
            $nin:['Drama']
        }
    }]
}).count();




// v) Find shows that do not have at least one of Drama or Horror as their genre
// (i.e. show could have Drama but not Horror, Horror but not Drama, or neither
// Drama not Horror)

db.shows.find({
    $or:[{
        genres:{
            $in: ['Drama'],
            $nin: ['Horror']
        }
    },
    {
        genres:{
            $in:['Horror'],
            $nin:['Drama']                          
        }
    },
    {
        genres:{
            $nin: ['Drama', 'Horror']
        }
    }]
}).count();                             //result 223



// d) Element operators - $exists and $type


// i) Find shows that have a webChannel property\
db.shows.find({
    webChannel : {
        $exists: true,
        $type: "null"
    }
}).count();


//webchannel which is not null
db.shows.find({
    webChannel : {
        $exists: true,
        $not: {$type: "null"}
    }
}).count();




// Create a collection to store scores of students in various subjects. Include name of
// students in one field, and scores in another (between 0 – 100). Scores is an array of
// document, each with the subject name and score. Insert some documents so that some
// subjects are shared among students and some subjects are specific to a student (elective
// subjects).
const classScores = [
    {
        name: 'John',
        scores: [
            { subject: 'Physics', score: 95 },
            { subject: 'History', score: 93 },
            { subject: 'Geography', score: 78 },
        ]
    },
    {
        name: 'Jane',
        scores: [
            { subject: 'Geography', score: 82 },
            { subject: 'History', score: 99 },
            { subject: 'English', score: 85 },
        ]
    },
    {
        name: 'Mark',
        scores: [
            { subject: 'Biology', score: 75 },
            { subject: 'Arts', score: 93 },
            { subject: 'History', score: 79 }
        ]
    }
]

//chosse DB contacts and insert collection using insert many


// i) Find all students who have a score of more 90% in some subject and have taken
// up Geography

db.classScores.find({
    'scores.score': { $gte: 80 },
    'scores.subject': {$regex: 'Geography', $option: 'i'}
});



// ii) Find all students who have a score of more than 90% in history



// iv. . Find all shows that have a weight of less than 50 and rating more 7 and increase
// weight to maximum( 50, current value ).

db.getCollection('shows').updateOne(
    {
        weight: {
            $lt: 50
        },
        'rating.average': {
            $gt: 7
        }
    },
    { 
        $max: 
        { 
            weight: 870 
        } 
    }
)



// i) Update all shows that have a scheduled screening on “Monday”, and replace the
// item “Monday” with “monday” (lowercase). Hint: Use $ operator.

db.shows.updateMany(
    {
        'schedule.days': 'Monday'
    },
    {
        $set: {
            'schedule.days.$': 'monday'
        }
    }
);

// ii. Update all shows with genre “Horror” by adding another genre “Supernatural”

db.shows.updateMany(
    {

    }
);

// iii) Update all shows with genre “Horror” by adding 2 other genres “Supernatural” and
// “Spook” (you will need to use $each). Also explore how $sort and $slice can be used
// in this case.

db.shows.updateMany(
    {
        genres: 'Horror'
    },
    {
        $push: {
            genres: {$each: ['Supernatural', 'Spook']}
        }
    }
);

// iv) Remove the genre Supernatural from the first matching document
db.shows.updateOne(
    {
        genres: 'Supernatural'
    },
    {
        
    }
)
