function cinema([arg1, arg2, arg3]) {

    let projection = arg1.toLowerCase();
    let row = parseInt(arg2);
    let column = parseInt(arg3);

    let mon = 0.0;

    switch (projection) {
        case "premiere": money = 12 * row * column; break;
        case "normal": money = 7.5 * row * column; break;
        case "discount": money = 5 * row * column; break;
    }
    console.log(money.toFixed(2) + " leva")
}


cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
