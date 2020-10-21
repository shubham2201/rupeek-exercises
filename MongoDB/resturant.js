// https://www.w3resource.com/mongodb-exercises/#PracticeOnline
// question link


// 1 
db.resturants.find();

// 2
db.resturants.find({ }, {'resturant_id': 1,
'name':1,
'borough':1,
'cuisine':1
});

// 3
db.resturants.find({ }, {'resturant_id': 1,
'name':1,
'borough':1,
'cuisine':1,
'_id':0
});

// 4
db.resturants.find({ }, {'resturant_id': 1,
'name':1,
'borough':1,
'address.zipcode':1,
'_id':0
});

// 5
db.resturants.find({borough: 'Bronx' });

// 6
db.resturants.find({borough: 'Bronx' }).limit(5);

// 7
db.resturants.find({borough: 'Bronx' }).skip(5).limit(5);


// 8
db.resturants.find({
    grades: {
        $elemMatch:{
            'score': {$gt: 90}
        }
    }
});


// 9
db.resturants.find({
    grades: {
        $elemMatch:{
            'score': {$gt: 80, $lt: 100}
        }
    }
});

// 10
db.resturants.find({
    'address.coord': {
        $lt: -95.754168
    }
});

// 11
db.resturants.find({
    $and: [
        {'cuisine': {$ne: 'American'}},
        {'grades.score': {$gt: 70}}
        {'address.coord': {$lt: -65.754168}}
    ]
});

// 12
db.resturants.find({
    $and: [
        {'cuisine': {$ne: 'American'}},
        {'grades.score': {$gt: 70}}
        {'address.coord': {$lt: -65.754168}}
    ]
});

// 13
db.resturants.find({
    'cuisine': {$ne: 'American'},
    'grades.grade': {$eq: 'A'},
    'borough': {$ne: 'Brooklyn'}
}).sort({'cuisine':-1});


// 14. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.
db.resturants.find(
    {
    name: { $regex: /^Wil/ }
    },
    {
        resturant_id:1,
        name:1,
        borough:1,
        cuisine:1
    }
)


// 15. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name. 
db.resturants.find(
    {
        name: {$regex: /ces$/}
    },
    {
        resturant_id:1,
        name:1,
        borough:1,
        cuisine:1
    }
);

// 16. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name. 
db.resturants.find(
    {
        name: {$regex: /Reg/}
    },
    {
        resturant_id:1,
        name:1,
        borough:1,
        cuisine:1
    }
);

