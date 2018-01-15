function pointOnRectangleBorder([arg1, arg2, arg3, arg4, arg5, arg6]) {

    let x1 = Number(arg1);
    let y1 = Number(arg2);
    let x2 = Number(arg3);
    let y2 = Number(arg4);

    let x = Number(arg5);
    let y = Number(arg6);

    if (((x === x1 || x === x2) && (y >= y1) && (y <= y2)) ||
        ((y === y1 || y === y2) && (x >= x1) && (x <= x2))) {

        console.log("Border");
    }


    //Alternative solution with simplified condition

    //var onLeftSide = (x === x1) && (y >= y1) && (y <= y2);
    //var onRightSide = (x === x2) && (y >= y1) && (y <= y2);
    //var onLowerSide = (y === y1) && (x >= x1) && (x <= x2); 
    //var onUpperSide = (y === y2) && (x >= x1) && (x <= x2);

    //if (onLeftSide || onRightSide || onLowerSide || onUpperSide) {

    //    console.log("Border");
    //}

    else {
        console.log("Inside / Outside")
    }
}

pointOnRectangleBorder(["2", "-3", "12", "3", "12", "-1"]);
pointOnRectangleBorder(["2", "-3", "12", "3", "8", "-1"]);

