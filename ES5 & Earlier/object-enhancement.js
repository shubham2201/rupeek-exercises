const name='Shubham', age=23, spouseKey = 'wife';

const jane = {
    name: 'jane',
    age: 22
};

const person = {
    name, 
    age, 
    [spouseKey]: jane,
    celebrateBirthday() {
        this.age++;
    }
};

person.celebrateBirthday();
console.log(person);