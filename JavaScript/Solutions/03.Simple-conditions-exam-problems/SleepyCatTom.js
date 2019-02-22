function sleepyCatTom([holidays]) {

    let workingDays = 365 - holidays;

    let totalPlayMinutes = holidays * 127 + workingDays * 63;

    let difference = Math.abs(totalPlayMinutes - 30000);
    let hours = difference / 60;
    let minutes = difference % 60;

    if (totalPlayMinutes > 30000) {
        console.log("Tom will run away");
        console.log(`${Math.floor(hours)} hours and ${Math.floor(minutes)} minutes more for play`);
    }
    else {
        console.log("Tom sleeps well");
        console.log(`${Math.floor(hours)} hours and ${Math.floor(minutes)} minutes less for play`);
    }
}
