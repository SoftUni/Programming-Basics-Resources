function solve([x, y]) {
    x = Number(x);
    y = Number(y);

    let pointInRect1 = x >= 2 && x <= 12 && y >= -3 && y <= 1;
    let pointInRect2 = x >= 4 && x <= 10 && y >= -5 && y <= 3;

    if(pointInRect1 || pointInRect2) {
        console.log('in');
    }
    else {
        console.log('out');
    }
}

solve([8, -5]);
solve([11, -5]);
solve([6, -3]);
solve([11, 2]);