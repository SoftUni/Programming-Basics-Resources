function areaOfFigures(args) {
    let figure = args[0];
    let area = 0;
    switch (figure) {
        case "square": {
            let a = Number(args[1]);
            area = a * a;
        } break;
        case "rectangle": {
            let a = Number(args[1]);
            let b = Number(args[2]);
            area = a * b;
        } break;
        case "circle": {
            let r = Number(args[1]);
            area = Math.PI * r * r;
        } break;
        case "triangle": {
            let a = Number(args[1]);
            let h = Number(args[2]);
            area = a * h / 2;
        } break;
        default: break;
    }
    console.log(area);
}

areaOfFigures(["square", 5]);
areaOfFigures(["rectangle", 7, 2.5]);
areaOfFigures(["circle", 6]);
areaOfFigures(["triangle", 4.5, 20]);