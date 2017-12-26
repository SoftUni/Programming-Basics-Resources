function pointInFigure([arg1,arg2,arg3]){
    let h = Number(arg1);
    let x = Number(arg2);
    let y = Number(arg3);

    if(x > 0 && x < 3*h && y > 0 && y < h || x > h && x < 2*h && y > 0 && y < 4*h){
        console.log("inside");
    }
    else if (x == 0  && y >= 0 && y <= h ||  
             x == 3*h && y >= 0 && y <= h ||
        y == 0 && x >= 0 && x <= 3*h ||
        y == h && x >= 0 && x <= 3*h ||
        x == h && y >= 0 && y <= 4*h ||
        x == 2*h && y >= 0 && y <= 4*h ||
        y == 0 && x >= h && x <= 2*h ||
        y == 4*h&& x >= h && x <= 2*h) {
        console.log("border")
    }
    else{
        console.log("outside")
    }
}

pointInFigure([2,3,10]);
pointInFigure([2,3,1]);
pointInFigure([2,2,2]);
pointInFigure([2,6,0]);
pointInFigure([2,0,6]);
pointInFigure([15,13,55]);
pointInFigure([15,29,37]);
pointInFigure([15,37,18]);
pointInFigure([15,-4,7]);
pointInFigure([15,30,0]);