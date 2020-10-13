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

   const {name, 'manufacturer':brand} = iPhone11;
   const {specs: {memory :{value:RAM}}} = iPhone11;
   const {specs: {cameras: {rear: rearCamera}}} = iPhone11;
   const {specs: {availableColors: [,secondaryColor]}} = iPhone11;


   console.log(name, brand, RAM, rearCamera, secondaryColor);