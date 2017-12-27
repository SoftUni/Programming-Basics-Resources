function solve(input) {
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;

    for (let i = 0; i < input.length; i++) {
        let num = input[i];

        if(i % 3 === 0) {
            sum1 += num;
        }
        if(i % 3 === 1) {
            sum2 += num;
        }
        if(i % 3 === 2) {
            sum3 += num;
        }
    }

    console.log('sum1 = ' + sum1);
    console.log('sum2 = ' + sum2);
    console.log('sum3 = ' + sum3);
}

solve([3, 5]);
solve([7, -2, 6, 12]);
solve([3, 5, 2, 7, 8]);