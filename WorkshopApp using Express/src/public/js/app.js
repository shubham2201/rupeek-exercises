function formateDate( isoDte) {
    const date = new Date(isoDte);
    return date.toDateString();
}

const dates = document.querySelectorAll('.date');

for(let i=0; i<dates.length;i++){
    dates[i].innerText = formateDate(dates[i].innerText);
}