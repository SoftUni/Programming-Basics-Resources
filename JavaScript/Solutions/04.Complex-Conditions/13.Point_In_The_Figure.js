function pointInTheFigure([arg1, arg2, arg3]) {

    var h = Number(arg1);
    var x = Number(arg2);
    var y = Number(arg3);       

    var outRectangle1 = (x < 0 || x > 3 * h) || (y < 0 || y > h);
    var outRectangle2 = (x < h || x > 2 * h) || (y < h || y > 4 * h);

    var inRectangle1 = (x > 0 && x < 3 * h) && (y > 0 && y < h);
    var inRectangle2 = (x > h && x < 2 * h) && (y >= h && y < 4 * h);

    var commonBorder = x > h && x < 2 * h && y === h;

    if (outRectangle1 && outRectangle2) {
        console.log("outside")
    }

    else if (inRectangle1 || inRectangle2) {
        console.log("inside");
    }

    else {
        console.log("border");
    }
}


pointInTheFigure(["10", "13", "10"]);   //Inside
pointInTheFigure(["10", "18", "10"]);   //Inside

pointInTheFigure(["2", "3", "10"]);   //Outside
pointInTheFigure(["2", "3", "1"]);    //Inside
pointInTheFigure(["2", "2", "2"]);    //Border
pointInTheFigure(["2", "6", "0"]);    //Border
pointInTheFigure(["2", "0", "6"]);    //Outside
pointInTheFigure(["15", "13", "55"]); //Outside
pointInTheFigure(["15", "29", "37"]); //Inside
pointInTheFigure(["15", "37", "18"]); //Outside
pointInTheFigure(["15", "-4", "7"]);  //Outside
pointInTheFigure(["15", "30", "0"]);  //Border


