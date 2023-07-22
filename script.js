//Defining of All the Necessary Components
const set = document.getElementById("setBtn");
const resTime = document.getElementById("time");

//Adding the Event Listener of onclick to the Button
set.addEventListener('click',()=>{
    console.log("Set Button is Clicked"); //Logging of the Set Button
    
    //Defining of all the elements

    const secTime = document.getElementById("seconds").value;
    const minTime = document.getElementById("mins").value;
    const hourTime = document.getElementById("hours").value;

    //Caliculating the Total Time in Seconds
    
    let timeSecond = parseInt(secTime)+parseInt(minTime)*60+parseInt(hourTime)*3600;
    
    //Caliculation of the Seconds

    let sec = timeSecond%60;
    
    //Calculation of the Minutes

    minute = timeSecond-sec;
    minute = minute/60;
    minute = minute%60;

    //Calculation of the hour time

    hour = Math.floor(timeSecond/3600);
    timeSecond = timeSecond%60;

    //Verifying the hour,minute and seconds in the console log.

    console.log(hour,minute, timeSecond);

    //Counting Down the Value
    const countDown = setInterval(()=>{
        if(timeSecond>0 && timeSecond<60){
        timeSecond--;
        }
        if(timeSecond == 0 && minute>0){
            minute = minute-1;
            timeSecond=59;
            countDown;
        }
        if(timeSecond == 0 && minute==0 && hour>0){
            minute = 59;
            timeSecond=59;
            hour=hour-1;
            countDown;
        }
        else if(timeSecond ==0 && minute ==0 && hour==0){
            alert("timer is Ended!!")
            setInterval(() => {
                window.location.reload();
                resTime.innerHTML = `Timer is Ended`;
            }, 2000);

        }
        resTime.innerHTML =`${hour}:${minute}:${timeSecond}`;
    },1000)
})

/* ---------------------------End of the Code--------- */



