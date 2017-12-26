function journey([arg1,arg2]){
    let budget = Number(arg1);
    let season = arg2.toLowerCase();

    let moneySpent = 0;

    let destination = "";
    let resort = "";

    if(season == "summer"){
        resort = "Camp";
    } else if (season == "winter"){
        resort = "Hotel";
    }

    if(budget <= 100){
        destination = "Bulgaria";
        if(season == "summer"){
            moneySpent = 0.3 * budget;
        } else if (season == "winter") {
            moneySpent = 0.7 * budget;
        }
    } else if (budget <= 1000){
        destination = "Balkans";
        if(season == "summer"){
            moneySpent = 0.4 * budget;
        } else if (season == "winter") {
            moneySpent = 0.8 * budget;
        }
    } else{
        resort = "Hotel";
        destination = "Europe";
        moneySpent = 0.9 * budget;
    }    

    console.log(`Somewhere in ${destination}`);
    console.log(`${resort} - ${moneySpent.toFixed(2)}`);
}

journey(["50","summer"]);
journey(["75","winter"]);
journey(["312","summer"]);
journey(["678.53","winter"]);
journey(["1500","summer"]);