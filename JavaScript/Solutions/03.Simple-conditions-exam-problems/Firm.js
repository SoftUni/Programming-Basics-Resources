function firm([projectHours, availableDays, workers]) {

    let workDays = availableDays * 0.90;
    let overtimeHours = (workDays * workers) * 2;
    let workHours = (workDays * workers) * 8;
    let totalHours = Math.floor(workHours + overtimeHours);

    if (projectHours <= totalHours) {
        console.log(`Yes!${totalHours - projectHours} hours left.`);
    }
    else {
        console.log(`Not enough time!${projectHours - totalHours} hours needed.`);
    }
}
