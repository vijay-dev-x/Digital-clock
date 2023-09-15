// ######################################### for time 

setInterval(function (){
   
    const time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let session = "AM"


    if (hour>12){
        hour-=12;
        session = "PM"

    }else{
        session="AM"
    }
  
    hour = hour<10 ? "0"+hour :hour
    min = min<10 ? "0"+min :min ;
    sec = sec<10 ? "0"+sec : sec ;

    let getTime = hour + ":" + min + ":" + sec + " - " + session;

    document.getElementById("time").innerHTML = getTime;
} 
, 1000);

// ######################################  for date

function fullDate(){
    const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const months = ["January", "Febuary" , "March", "Aprail","May", "June", "july", "August", "September" , "October" , "November" , "December"]

    const time2 = new Date();
    let day = time2.getDay();
    let date = time2.getDate();
    let month = time2.getMonth();
    let year = time2.getFullYear();
    let completeDate = days[day] + ", " + date + " "  + months[month] + " "  + year;
    document.querySelector("h2").innerHTML = completeDate 
}
fullDate();