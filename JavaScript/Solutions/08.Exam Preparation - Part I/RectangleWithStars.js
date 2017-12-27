function solve(n) {
    n = Number(n);

    console.log('%'.repeat(2 * n));

    let numRows = n;
    if (n % 2 === 0) numRows--;

    for (let i = 0; i < numRows; i++) {
        if (i === (numRows - 1) / 2) {
            console.log(
                '%' +
                ' '.repeat(n - 2) + 
                '**' +
                ' '.repeat(n - 2) +
                '%'
            );
        } else {
            console.log(
                '%' + 
                ' '.repeat(n * 2 - 2) +
                '%'
            );
        }
    }

    console.log('%'.repeat(2 * n));
}

solve(2);
solve(3);
solve(4);
solve(5);