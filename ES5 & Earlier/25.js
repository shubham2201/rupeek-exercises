var phones = [
    { name : 'Samsung Galaxy S10+ Plus', price: 620, type: 'refurbished', manufacturer: 'Samsung'},
    { name : 'Apple iPhone 7 Plus', price: 450, type: 'refurbished', manufacturer: 'Apple' },
    { name : 'One Plus 6', price: 430, type: 'new', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone Xs', price: 910, type: 'new', manufacturer: 'Apple' },
    { name : 'One Plus 7', price: 430, type: 'refurbished', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone 8 Plus', price: 610, type: 'new', manufacturer: 'Apple' },
];

const phone = [];
phones.forEach(customer => phone.push(customer.name));
// console.log(phone);

const newPhone = phones.filter(phone => phone.type==='new');
console.log(newPhone);

const price440 = [];
phones.forEach(customer => {
    if(customer.price <= 440) {
        price440.push(customer);
    }
});
// console.log(price440);})

