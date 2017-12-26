function sumSeconds([arg1, arg2, arg3]) {
    let sec1 = Number(arg1);
    let sec2 = Number(arg2);
    let sec3 = Number(arg3);
    let secs = sec1 + sec2 + sec3;
    let mins = 0;
    if (secs > 59) {
        mins++; secs = secs - 60;
    }
    if (secs > 59) {
        mins++; secs = secs - 60;
    }
    if (secs < 10) {
        console.log(mins + ":" + "0" + secs);
    }
    else {
        console.log(mins + ":" + secs);
    }
}

sumSeconds([35,45,44]);
sumSeconds([22,7,34]);
sumSeconds([50,50,49]);
sumSeconds([14,12,10]);