function foo() {
    console.log(this);
};

foo.call();

const fooAgain = foo.bind( {x:1} );

fooAgain();