function solve([a, b, c]) {
    a = Number(a);
    b = Number(b);
    c = Number(c);

    if(a + b === c) {
        if(a > b) {
            console.log(b + ' + ' + a + ' = ' + c);
        } else {
            console.log(a + ' + ' + b + ' = ' + c);
        }
    } else if(a + c === b) {
        if(a > c) {
            console.log(c + ' + ' + a + ' = ' + b);
        } else {
            console.log(a + ' + ' + c + ' = ' + b);
        }
    } else if(b + c === a) {
        if(b > c) {
            console.log(c + ' + ' + b + ' = ' + a);
        } else {
            console.log(b + ' + ' + c + ' = ' + a);
        }
    } else {
        console.log('No');
    }
}

solve([3, 5, 2]);
solve([2, 2, 4]);
solve([1, 1, 5]);
solve([2, 6, 3]);