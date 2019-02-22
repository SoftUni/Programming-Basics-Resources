function transportPrice([distance, dayOrNight]) {
    let price = 0;
    
    let taxiRate = 0;

    if (dayOrNight === "day") {
        taxiRate = 0.79;
    }
    else {
        taxiRate = 0.90;
    }

    if (distance < 20) {
        price = 0.70 + (distance * taxiRate);
    }
    else if (distance < 100) {
        price = distance * 0.09;
    }
    else {
        price = distance * 0.06;
    }
    console.log(price);
}









