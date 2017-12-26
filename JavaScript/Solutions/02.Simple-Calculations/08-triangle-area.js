function triangleArea([arg1, arg2]) {
    let side = parseFloat(arg1);
    let height = parseFloat(arg2);
    let area = side * height / 2;
    console.log(area.toFixed(2));   
}

triangleArea([20, 30]);
triangleArea([15, 35]);
triangleArea([7.75, 8.45]);
triangleArea([1.23456, 4.56789]);     