function sumNumbers(args) {
    let sum = 0;
    for (let i = 1; i < args.length; i++) {
        sum += Number(args[i]);
    }
    console.log(sum);
}

test([2, 10, 10]); //result 20
test([3, -10, -20, -30]); //result -60