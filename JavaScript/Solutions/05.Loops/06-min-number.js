function minNumber(args) {
    let n = Number(args[0]);
    let min = Number.POSITIVE_INFINITY;
    for (var i = 1; i <= n; i++) {
        let num = Number(args[i]);
        if (num < min) {
            min = num;
        }
    }
    console.log(min);
}

minNumber([2, 100, 99]);
minNumber([3, -10, 20, -30]);
minNumber([4, 45, -20, 7, 99]);
minNumber([1, 999]);
minNumber([2, -1, -2]);