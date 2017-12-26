function histogram(args){
    let n = Number(args[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(args[i]);
        if (currentNum < 200) {
            p1++;
        } else if (currentNum < 400) {
            p2++;
        } else if (currentNum < 600) {
            p3++;
        } else if (currentNum < 800) {
            p4++;
        } else {
            p5++;
        }
    }
    console.log((p1 / n * 100).toFixed(2) + "%");
    console.log((p2 / n * 100).toFixed(2) + "%");
    console.log((p3 / n * 100).toFixed(2) + "%");
    console.log((p4 / n * 100).toFixed(2) + "%");
    console.log((p5 / n * 100).toFixed(2) + "%");
}

histogram(["3", "1", "2", "999"]);
console.log("------------------------");
histogram(["4", "53", "7", "56", "999"]);
console.log("------------------------");
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
console.log("------------------------");
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
console.log("------------------------");
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7","150","250","680","2","600","200"]);