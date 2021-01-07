
function displayClock(){

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

let clock = document.querySelector('.clock');


    if(hours<10 ) hours = `0${hours}`;
    if(minutes<10 ) minutes = `0${minutes}`;
    if(seconds<10 ) seconds = `0${seconds}`;

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

//if you dont call it here as well, for one secod after the page loads, the time wont be displayed.
displayClock();
setInterval(displayClock, 1000);
