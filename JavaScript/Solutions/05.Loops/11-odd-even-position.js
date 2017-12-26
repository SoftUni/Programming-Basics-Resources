function oddEvenPos(args) {
    let n = Number(args[0]);
    let oddSum = 0;
    let oddMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY;
    let evenSum = 0;
    let evenMin = Number.POSITIVE_INFINITY;
    let evenMax = Number.NEGATIVE_INFINITY;
    for (var i = 1; i <= n; i++) {
        let num = Number(args[i]);
        if (i % 2 != 0) {
            oddSum += num;
            if (num > oddMax) {
                oddMax = num;
            }
            if (num < oddMin) {
                oddMin = num;
            }
        }
        else {
            evenSum += num;
            if (num > evenMax) {
                evenMax = num;
            }
            if (num < evenMin) {
                evenMin = num;
            }
        }
    }
    if (oddMin == Number.POSITIVE_INFINITY) {
        oddMin = "No";
    }
    if (evenMin == Number.POSITIVE_INFINITY) {
        evenMin = "No";
    }
    if (oddMax == Number.NEGATIVE_INFINITY) {
        oddMax = "No";
    }
    if (evenMax == Number.NEGATIVE_INFINITY) {
        evenMax = "No";
    }

    console.log("OddSum = " + oddSum);
    console.log("OddMin = " + oddMin);
    console.log("OddMax = " + oddMax);
    console.log("EvenSum = " + evenSum);
    console.log("EvenMin = " + evenMin);
    console.log("EvenMax = " + evenMax);
}

oddEvenPos([6, 2, 3, 5, 4, 2, 1]);
oddEvenPos([2, 1.5, -2.5]);
oddEvenPos([1, 1]);
oddEvenPos([0]);
oddEvenPos([5, 3, -2, 8, 11, -3]);
oddEvenPos([4, 1.5, 1.75, 1.5, 1.75]);
oddEvenPos([1, -5]);
oddEvenPos([3, -1, -2, -3]);