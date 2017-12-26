function isOnTime([arg1, arg2, arg3, arg4]){
    let examHour = Number(arg1);
    let examMinutes = Number(arg2);
    let arrivalHour = Number(arg3);
    let arrivalMinutes = Number(arg4);

    let examTime = examHour * 60 + examMinutes;
    let arrivalTime = arrivalHour * 60 + arrivalMinutes;

    let timeDiff = examTime - arrivalTime;
    
    if(timeDiff < 0){
        console.log("Late");
        if(timeDiff < -59){
            console.log(`${Math.abs(Math.ceil(timeDiff/60))}:${(Math.abs(timeDiff%60) > 9?Math.abs(timeDiff%60):"0"+Math.abs(timeDiff%60))} hours after the start`);
        } else  {
            console.log(`${Math.abs(timeDiff%60)} minutes after the start`);
        }       
    } else if (timeDiff > 30) {
        console.log("Early");
        if(timeDiff > 59){
            console.log(`${Math.floor(timeDiff/60)}:${(timeDiff%60 > 9?timeDiff%60:"0"+timeDiff%60)} hours before the start`);
        } else if(timeDiff > 0) {
            console.log(`${timeDiff%60} minutes before the start`);
        }
    } else if(timeDiff <=30 || timeDiff == 0){
        console.log("On time");
        if (timeDiff > 59){
            console.log(`${Math.floor(timeDiff/60)}:${(timeDiff%60 > 9?timeDiff%60:"0"+timeDiff%60)} hours before the start`);
        } else if(timeDiff > 0) {
            console.log(`${timeDiff%60} minutes before the start`);
        }
    }
}

//isOnTime(["9","30","9","50"]);
//isOnTime(["9","00","8","30"]);
//isOnTime(["16","00","15","00"]);
isOnTime(["9","00","10","30"]);
//isOnTime(["14","00","13","55"]);
//isOnTime(["11","30","8","12"]);
//isOnTime(["10","00","10","00"]);
//isOnTime(["11","30","10","55"]);
//isOnTime(["11","30","12","29"]);