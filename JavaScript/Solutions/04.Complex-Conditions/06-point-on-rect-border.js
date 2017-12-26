function isOnBorder([arg1, arg2, arg3, arg4, arg5, arg6]){
    let x1 = Number(arg1), y1 = Number(arg2), x2 = Number(arg3), 
        y2 = Number(arg4), x = Number(arg5), y = Number(arg6);
    let onLeftSide = (x == x1) && (y >= y1) && (y <= y2);
    let onRightSide = (x == x2) && (y >= y1) && (y <= y2);
    let onUpSide = (y == y1) && (x >= x1) && (x <= x2);
    let onDownSide = (y == y2) && (x >= x1) && (x <= x2);
    if (onLeftSide || onRightSide || onUpSide || onDownSide)
        console.log("Border");
    else
        console.log("Inside / Outside");
}

isOnBorder([2,-3,12,3,8,-1]);
isOnBorder([2,-3,12,3,12,-1]);