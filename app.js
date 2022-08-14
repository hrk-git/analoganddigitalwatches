var secondsHand=document.getElementById('seconds-hand');
var minutesHand=document.getElementById('minutes-hand');
var hoursHand=document.getElementById('hours-hand');

function getTime(){

    const now=new Date();

    const seconds=now.getSeconds();
    
    const minutes=now.getMinutes();
    const hours=now.getHours();
    console.log(seconds);
    hoursHand.style.backgroundColor="red";

}
getTime();

