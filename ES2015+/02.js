const iPhone11 = {
    name: 'iPhone 11',
    manufacturer: 'Apple',
    price: 699,
    specs: {
        color: 'White',
        memory: {
            value: 128,
            unit: 'MB'
        },
        cameras: {
            front: '12 MP Wide',
            rear: '12 MP Ultra Wide'
        },
        availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
    },
    calculateDiscoutedPrice: function( percentage ) {
    return this.price * ( 100 - percentage ) / 100;
    }
};

const printPhoneDetails = ({manufacturer, name, calculateDiscoutedPrice}, discount) => console.log(`${manufacturer} ${name} is avilable at a ${discount}% discounted rate of \$${calculateDiscoutedPrice(discount)}`);
iPhone11.calculateDiscoutedPrice = iPhone11.calculateDiscoutedPrice.bind( iPhone11 );
printPhoneDetails(iPhone11, 10);