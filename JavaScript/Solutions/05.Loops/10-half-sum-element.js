function halfSum(args) {
    let n = Number(args[0]);
    let sum = 0;
    let maxNum = Number.NEGATIVE_INFINITY;
    for (var i = 1; i <= n; i++) {
        let num = Number(args[i]);
        if (num > maxNum) {
            maxNum = num;
        }
        sum += num;
    }
    sum -= maxNum;
    if (sum == maxNum) {
        console.log("Yes");
        console.log("Sum = " + sum);
    }
    else {
        console.log("No");
        console.log("Diff = " + Math.abs(sum - maxNum));
    }
}

halfSum([7, 3, 4, 1, 1, 2, 12, 1]);
halfSum([4, 6, 1, 2, 3]);
halfSum([3, 1, 1, 10]);
halfSum([3, 5, 5, 1]);
halfSum([3, 1, 1, 1]);