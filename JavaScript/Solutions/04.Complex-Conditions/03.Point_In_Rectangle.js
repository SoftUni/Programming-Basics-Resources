function pointInRectangle([arg1, arg2, arg3, arg4, arg5, arg6]) {

    let x1 = Number(arg1);
    let y1 = Number(arg2);
    let x2 = Number(arg3);
    let y2 = Number(arg4);

    let x = Number(arg5);
    let y = Number(arg6);

    if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
        console.log("Inside");
    }
    else {
        Console.log("Outside")
    }
}


pointInRectangle(["2", "-3", "12", "3", "8", "-1"]);
