function solve([x1, y1, x2, y2, x3, y3]) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);
    x3 = Number(x3);
    y3 = Number(y3);
    
    let a = Math.abs(x2 - x3);
    let h = Math.abs(y2 - y1);

    let s = (a * h) / 2;

    console.log(s);
}

solve([5, -2, 6, 1, 1, 1]);
solve([4, 1, -1, -3, 3, -3]);