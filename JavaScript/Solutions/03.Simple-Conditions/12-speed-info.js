function speedInfo([arg1]){
    let speed = Number(arg1);
    if(speed > 1000){
        console.log("extremely fast");
    }
    else if (speed > 150){
        console.log("ultra fast");
    }
    else if (speed > 50){
        console.log("fast");
    }
    else if (speed > 10){
        console.log("average");
    }
    else{
        console.log("slow");
    }
}

speedInfo([8]);
speedInfo([49.5]);
speedInfo([126]);
speedInfo([160]);
speedInfo([3500]);