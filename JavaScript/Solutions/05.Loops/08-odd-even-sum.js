function oddEvenSum(args) {
    let n = Number(args[0]);
    let oddSum = 0;
    let evenSum = 0;
    for (var i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            evenSum += Number(args[i]);
        }
        else {
            oddSum += Number(args[i]);
        }
    }
    if (evenSum == oddSum) {
        console.log("Yes");
        console.log("Sum = " + evenSum);
    }
    else {
        console.log("No");
        console.log("Diff = " + Math.abs(evenSum - oddSum));
    }
}

oddEvenSum([4, 10, 50, 60, 20]);
oddEvenSum([4, 3, 5, 1, -2]);
oddEvenSum([3, 5, 8, 1]);