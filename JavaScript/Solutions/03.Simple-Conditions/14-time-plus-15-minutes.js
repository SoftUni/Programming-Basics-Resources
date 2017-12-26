function add15Minutes([arg1, arg2]){
    let hours = Number(arg1);
    let minutes = Number(arg2);
    if(minutes + 15 > 59){
        minutes -= 45;
        hours ++;
    }
    else{
        minutes += 15;
    }
    if (hours > 23){
        hours = 0;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    console.log(hours + ":" + minutes);
}

add15Minutes([1, 46]);
add15Minutes([0, 01]);
add15Minutes([23, 59]);
add15Minutes([11, 08]);
add15Minutes([12, 49]);