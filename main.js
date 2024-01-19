// Clock Task
function myClock(){
    let mydate = new Date();
    let hours = mydate.getHours();
    let minutes = mydate.getMinutes();
    let seconds = mydate.getSeconds();
    
    if(hours >  12){
        hours-= 12;
    }
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    let my_Clock = hours + ' : ' + minutes + ' : ' + seconds;
    
    document.getElementById("clock").innerHTML = my_Clock;

    setTimeout(myClock, 1000);
}
myClock();
// End Of Clock
let melSeconds = document.getElementById('seconds-2');
let mySeconds = document.getElementById('minutes-2');
let melSec = 00;
let sec = 00;
let start = document.getElementById("start");
let end = document.getElementById("end");
let reset = document.getElementById('reset');
let interval ;

start.onclick = function(){
    clearInterval(interval);
    interval = setInterval(setTimer,10);
}
end.onclick = function(){
    clearInterval(interval);
}
reset.onclick = function(){
    clearInterval(interval);
    sec = 0;
    melSec = 0;
    melSeconds.innerHTML = "0"+ melSec;
    mySeconds.innerHTML = "0"+ sec;
}

function setTimer(){
    melSec++;
    if(melSec <= 9){
        melSeconds.innerHTML = '0' + melSec;
    }
    if(melSec > 9){
        melSeconds.innerHTML = melSec;
    }
    if (melSec > 99){
        sec++;
        mySeconds.innerHTML = '0' + sec;
        melSec = 0;
        melSeconds.innerHTML = "0" + 0;
        
    }
    if(sec > 9){
        mySeconds.innerHTML = sec;
    }
}