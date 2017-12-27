function solve([a, b]) {
    a = Number(a);
    b = Number(b);
    let count = 0;

    for (let i = a; i <= b; i++) {
        for (let j = i + 1; j <= b; j++) {
            for (let k = j + 1; k <= b; k++) {
                for (let l = k + 1; l <= b; l++) {
                    console.log(i + ' ' + j + ' ' + k + ' ' + l);
                    count++;
                }
            }
        }
    }

    if (count === 0) console.log('No');
}

solve([3, 7]);
solve([15, 20]);
solve([5, 7]);
solve([10, 13]);