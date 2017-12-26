function pointInRectangle([arg1, arg2, arg3, arg4, arg5, arg6]){
    let x1 = Number(arg1), y1 = Number(arg2);
    let x2 = Number(arg3), y2 = Number(arg4);
    let x = Number(arg5),  y = Number(arg6); 
    if (x >= x1 && x <= x2 && y >= y1 && y <= y2)
        console.log("Inside");
    else
        console.log("Outside");
}

pointInRectangle([2, -3, 12, 3, 8, -1]);
pointInRectangle([2,-3,12,3,11,-3.5]);
pointInRectangle([-1,-3,4,1,0.5,1]);
pointInRectangle([-1,-3,4,1,-1.2,1.4]);