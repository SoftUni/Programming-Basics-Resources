function divisionWithoutRemainder(args){
    let n = Number(args[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(args[i]);

        if (currentNum % 2 == 0) {
            p1++;
        }
        if (currentNum % 3 == 0) {
            p2++;
        }
        if(currentNum % 4 == 0){
            p3++;
        }
    }

    console.log((p1 / n * 100).toFixed(2) + "%");
    console.log((p2 / n * 100).toFixed(2) + "%");
    console.log((p3 / n * 100).toFixed(2) + "%");
}

divisionWithoutRemainder(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
divisionWithoutRemainder(["3", "3", "6", "9"]);