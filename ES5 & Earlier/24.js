var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

days.forEach(day => console.log(day));

const newArray = [];
days.forEach(day => newArray.push(day.length));

const arrSZ = [];
days.forEach(day => {
    if(day[0]>='S' && day[0]<='Z')arrSZ.push(day);
});

const arr6 = [];
days.forEach((day, index) => {
    if(newArray[index] === 6){
        arr6.push(day);
    }
});

console.log(arr6);

