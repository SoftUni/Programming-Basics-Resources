function leftRightSum(args) {
    let n = Number(args[0]);
    let leftSum = 0;
    let rightSum = 0;
    for (var i = 1; i <= n; i++) {
        leftSum += Number(args[i]);
    }
    for (var i = n + 1; i <= 2*n; i++) {
        rightSum += Number(args[i]);
    }
    if (leftSum == rightSum) {
        console.log("Yes, sum = " + leftSum);
    }
    else {
        console.log("No, diff = " + Math.abs(leftSum - rightSum));
    }
}

leftRightSum([2, 10, 90, 60, 40]);
leftRightSum([2, 90, 9, 50, 50]);

