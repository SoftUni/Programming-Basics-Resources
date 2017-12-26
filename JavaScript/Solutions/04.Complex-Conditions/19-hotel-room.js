function hotelRoom([arg1,arg2]){
    let month = arg1.toLowerCase();
    let nightsCount = Number(arg2);

    let pricePerNightStudio = 0;
    let pricePerNightApartment = 0;

    if(month == "may" || month == "october"){
        pricePerNightStudio = 50;
        pricePerNightApartment = 65;
        if(nightsCount > 14){
            pricePerNightStudio *= 0.7;
        } else if (nightsCount > 7){
            pricePerNightStudio *= 0.95;
        }
    } else if (month == "june" || month == "september"){
        pricePerNightStudio = 75.20;
        pricePerNightApartment = 68.70;
        if (nightsCount > 14){
            pricePerNightStudio *= 0.8;
        }

    } else if (month == "july" || month == "august"){
        pricePerNightStudio = 76;
        pricePerNightApartment = 77;
    }
    if (nightsCount > 14){
        pricePerNightApartment *= 0.9;
    }

    console.log(`Apartment: ${(pricePerNightApartment * nightsCount).toFixed(2)} lv.`);
    console.log(`Studio: ${(pricePerNightStudio * nightsCount).toFixed(2)} lv.`);
}

hotelRoom(["May","15"]);
hotelRoom(["June","14"]);
hotelRoom(["August","20"]);