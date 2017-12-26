function equalPairs(args) {
    let n = Number(args[0]);
    let maxSum = Number.NEGATIVE_INFINITY;
    let maxDiff = Number.NEGATIVE_INFINITY;
    let prevSum = 0;

    for (let i = 1; i < 2 * n; i += 2) {
        let sum = Number(args[i]) + Number(args[i + 1]);
        if (sum > maxSum) {
            maxSum = sum;
        }
        if (i != 1) {
            let diff = Math.abs(sum - prevSum);
            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }
        prevSum = sum;            
    }

    if (maxDiff == 0 || maxDiff == Number.NEGATIVE_INFINITY) {
        console.log("Yes, value=" + maxSum);
    } else {
        console.log("No, maxdiff=" + maxDiff);
    }
}

equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
equalPairs(["2", "1", "2", "2", "2"]);
equalPairs(["4", "1", "1", "3", "1", "2", "2","0","0"]);
equalPairs(["1", "5", "5"]);
equalPairs(["2", "-1", "0", "0", "-1"]);
equalPairs(["2", "-1", "2", "0", "-1"]);
