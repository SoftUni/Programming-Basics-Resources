function matchTickets([arg1, arg2, arg3]){
    let budget = Number(arg1);
    let category = arg2.toLowerCase();
    let fansCount = Number(arg3);

    let transportCost = 0;

    if(fansCount <= 4){
        transportCost = budget * 0.75;
    } else if (fansCount <= 9){
        transportCost = budget * 0.6;
    } else if (fansCount <= 24){
        transportCost = budget * 0.5;
    } else if (fansCount <= 49){
        transportCost = budget * 0.4;
    } else {
        transportCost = budget * 0.25;
    }

    let moneyLeft = budget - transportCost;
    let ticketsPrice = 0;

    if(category == "normal"){
        ticketsPrice = fansCount * 249.99;
    } else if (category == "vip"){
        ticketsPrice = fansCount * 499.99;
    }

    if(moneyLeft >= ticketsPrice){
        console.log(`Yes! You have ${(moneyLeft - ticketsPrice).toFixed(2)} leva left.`);
    } else{
        console.log(`Not enough money! You need ${(ticketsPrice - moneyLeft).toFixed(2)} leva.`);
    }
}

matchTickets(["1000","Normal", "1"]);
matchTickets(["30000","VIP", "49"]);