function celebrateBirthday() {
    this.age++;
};

const john = {
    name: 'John',
    age: 45,
    celebrateBirthday: celebrateBirthday
};

const jane = {
    name: 'Jane',
    age: 43,
    celebrateBirthday: celebrateBirthday
};

console.log(john.age);

jane.age++;
console.log(jane);

john.address = {
    'first line': 'Bhojubeer',
    city: 'Varanasi'
};

console.log(john.address.city);

john.spouse = jane;
jane.spouse = john;

jane.emailids = [
    'jane@rupeek.com',
    'jane@gmail.com'
];

console.log(jane.emailids[1]);

jane.emailids[1] = 'abc@xxx.com'

console.log(jane.emailids[1]);

jane.emailids.push('jane@akgec.ac.in');

console.log(jane);

john.celebrateBirthday();
jane.celebrateBirthday();

console.log(jane);