function solve([d, m]) {
    d = Number(d);
    m = Number(m);

    let daysInMonth = 31;
    if(m === 2) {
        daysInMonth = 28;
    }
    if(m === 4 || m === 6 || m === 9 || m === 11) {
        daysInMonth = 30;
    }

    d += 5;

    if(d > daysInMonth) {
        d -= daysInMonth;
        m++;

        if(m > 12) {
            m = 1;
        }
    }

    let monthToPrint = m;
    if(m < 10) {
        monthToPrint = '0' + monthToPrint;
    }

    console.log(d + '.' + monthToPrint);
}

solve([28, 03]);
solve([27, 12]);
solve([25, 1]);
solve([26, 02]);