function volleyball([arg1, arg2, arg3]) {

    let year = arg1.toLowerCase();
    let holidays = parseInt(arg2);
    let weekendsHome = parseInt(arg3);

    let sofiaWeekends = 48 - weekendsHome;
    let playSofia = 3.0 * (48 - weekendsHome) / 4  + 2.0 * holidays / 3;
    let playTotal = playSofia + weekendsHome;

    if (year === "leap") {
        playTotal = Math.floor(15 * playTotal / 100 + playTotal);
    }

    else {
        playTotal = Math.floor(playTotal);
    }

    console.log(playTotal);

}


volleyball(["leap", 5, 2]);
volleyball(["normal",3,2]);
volleyball(["leap",2,3]);
volleyball(["normal",11,6]);
volleyball(["leap",0,1]);
volleyball(["normal",6,13]);
