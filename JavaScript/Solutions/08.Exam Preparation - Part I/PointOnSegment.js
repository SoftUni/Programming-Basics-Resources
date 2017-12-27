function solve([first, second, point]) {
    first = Number(first);
    second = Number(second);
    point = Number(point);

    let left = Math.min(first, second);
    let right = Math.max(first, second);

    let distanceLeft = Math.abs(left - point);
    let distanceRight = Math.abs(right - point);
    
    let minDistance = Math.min(distanceLeft, distanceRight);

    if(point >= left && point <= right) {
        console.log('in');
    }
    else {
        console.log('out');
    }

    console.log(minDistance);
}

solve([10, 5, 7]);
solve([8, 10, 5]);
solve([1, -2, 3]);