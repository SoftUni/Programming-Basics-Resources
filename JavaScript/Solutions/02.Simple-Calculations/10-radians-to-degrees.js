function radiansToDegrees([arg1]) {
    let radians = Number(arg1);
    let degrees = radians * 180 / Math.PI;
    console.log(Math.round(degrees));
}

radiansToDegrees([3.1416]);
radiansToDegrees([6.2832]);
radiansToDegrees([0.7854]);
radiansToDegrees([0.5236]);
