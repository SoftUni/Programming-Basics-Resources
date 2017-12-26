function cinema([arg1, arg2, arg3]){
    let type = arg1.toLowerCase();
    let rows = Number(arg2);
    let cols = Number(arg3);
    let sum = 0;
    let seats = rows*cols;

    switch(type){
        case "premiere": sum = seats * 12;break;
        case "normal": sum = seats * 7.50; break;
        case "discount": sum = seats * 5;break;
    }
    console.log(sum.toFixed(2) + " leva");
}

cinema(["Premiere", 10,12]);
cinema(["Normal", 21,13]);
cinema(["Discount", 12,30]);