const date = new Date(); //This variable(date) generates the current date from web browser.

const renderCalendar = () => {
    const Monthdays = document.querySelector(".days");

const lastDay = new Date(date.getFullYear(), date.getMonth()+1,
0).getDate(); //variable created so that instead of defining i as 31 days we define it as last day of month.

// const months = date.getMonth(); //This variable(month) generates current month from web broswer.

// Above I have simple created variables with properties of methods already in JavaScript.

// So here I created an array of months. Each month has index number 0-11
// This manipulates the index numbers to give me the apprioate month.

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1,
0).getDay();

const nextDays = 7 - lastDayIndex -1

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]; //I realise code wasn't working because on line 3 I left const months = date.getMonth(). I understand i defined the same variable twice so the code didn't work.

// Here I use a query selector method to select class from HTML file.
// innerHTML is a DOM property used to change the content on HTML file. 
// I want the month to change according to the array above so I set my query selector to months(the array above). 
document.querySelector('.date h1').innerHTML = months[date.getMonth()]; //date.getMonth basically just generate an index number corresponding to month on web broswer that the array months[] then defines. 

//Now I will attempt to do the same for date on my own.

// console.log(date) //so I did a console log just to see how date is diplayed. Not really sure how it will appear if I do queryselector for .date p

// document.querySelector('.date p').innerHTML = date; //so it works but it doing to much lol, showing me time and time zone.

document.querySelector('.date p').innerHTML = date.toDateString(); //method that tells date in rythmic format.

//Nice first bit done. Now I need dynamic display of the days. I will be using for loop.

//this next for loop is for the first day of the month to corespond with the day of the week in real time.

let days= "";

//this next for loop is for the first day of the month to corespond with the day of the week in real time.
for(
    let x = firstDayIndex;//this makes it so x initially is the first weekdays index of specific month
     x>0; //don't understand lol
     x-- //don't understand
     )
     {
    days += `<div class="prev-date">${prevLastDay}</div>`;
}

for(
    let i=1;  //intial value for i
    i<=lastDay;   //i will be less than 31 or equal to it
    i++      //i will be a positive integer 
){
    if(i===new Date().getDate() && date.getMonth()===new Date().getMonth()){
        days += `<div class="today">${i}</div>`; 
    }else{
        days += `<div>${i}</div>`;
    } 
}

for(let j=1; j <= nextDays; j++){
    days += `<div class="next-date">${j}</div>`;
    Monthdays.innerHTML = days;
}
}

const Monthdays = document.querySelector(".days");

const lastDay = new Date(date.getFullYear(), date.getMonth()+1,
0).getDate(); //variable created so that instead of defining i as 31 days we define it as last day of month.

// const months = date.getMonth(); //This variable(month) generates current month from web broswer.

// Above I have simple created variables with properties of methods already in JavaScript.

// So here I created an array of months. Each month has index number 0-11
// This manipulates the index numbers to give me the apprioate month.

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1,
0).getDay();

const nextDays = 7 - lastDayIndex -1

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]; //I realise code wasn't working because on line 3 I left const months = date.getMonth(). I understand i defined the same variable twice so the code didn't work.

// Here I use a query selector method to select class from HTML file.
// innerHTML is a DOM property used to change the content on HTML file. 
// I want the month to change according to the array above so I set my query selector to months(the array above). 
document.querySelector('.date h1').innerHTML = months[date.getMonth()]; //date.getMonth basically just generate an index number corresponding to month on web broswer that the array months[] then defines. 

//Now I will attempt to do the same for date on my own.

// console.log(date) //so I did a console log just to see how date is diplayed. Not really sure how it will appear if I do queryselector for .date p

// document.querySelector('.date p').innerHTML = date; //so it works but it doing to much lol, showing me time and time zone.

document.querySelector('.date p').innerHTML = date.toDateString(); //method that tells date in rythmic format.

//Nice first bit done. Now I need dynamic display of the days. I will be using for loop.

//this next for loop is for the first day of the month to corespond with the day of the week in real time.

let days= "";

//this next for loop is for the first day of the month to corespond with the day of the week in real time.
for(
    let x = firstDayIndex;//this makes it so x initially is the first weekdays index of specific month
     x>0; //don't understand lol
     x-- //don't understand
     )
     {
    days += `<div class="prev-date">${prevLastDay}</div>`;
}

for(
    let i=1;  //intial value for i
    i<=lastDay;   //i will be less than 31 or equal to it
    i++      //i will be a positive integer 
){
    if(i===new Date().getDate() && date.getMonth()===new Date().getMonth()){
        days += `<div class="today">${i}</div>`; 
    }else{
        days += `<div>${i}</div>`;
    } 
}

for(let j=1; j <= nextDays; j++){
    days += `<div class="next-date">${j}</div>`;
    Monthdays.innerHTML = days;
}

document.querySelector(".prev").
addEventListener("click",()=>{
    date.setMonth(date.getMonth() - 1);
    renderCalendar()
})

document.querySelector(".next").
addEventListener("click",()=>{
    date.setMonth(date.getMonth() + 1);
    renderCalendar()
})

renderCalendar()


