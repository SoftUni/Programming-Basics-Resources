function smallShop([arg1, arg2, arg3]){
    let product = arg1.toLowerCase();
    let town = arg2.toLowerCase();
    let quantity = Number(arg3);
    if(town == "sofia"){
        if(product == "coffee")
            console.log(0.50 * quantity);
        else if (product == "water")
            console.log(0.80 * quantity);
        else if (product == "beer")
            console.log(1.20 * quantity);
        else if (product == "sweets")
            console.log(1.45 * quantity);
        else
            console.log(1.60 * quantity);
    }
    else if(town == "plovdiv"){
        if(product == "coffee")
            console.log(0.40 * quantity);
        else if (product == "water")
            console.log(0.70 * quantity);
        else if (product == "beer")
            console.log(1.15 * quantity);
        else if (product == "sweets")
            console.log(1.30 * quantity);
        else
            console.log(1.50 * quantity);
    }
    else if(town == "varna"){
        if(product == "coffee")
            console.log(0.45 * quantity);
        else if (product == "water")
            console.log(0.70 * quantity);
        else if (product == "beer")
            console.log(1.10 * quantity);
        else if (product == "sweets")
            console.log(1.35 * quantity);
        else
            console.log(1.55 * quantity);
    }
}

smallShop(["coffee", "Varna", 2]);
smallShop(["peanuts", "Plovdiv", 1]);
smallShop(["beer", "Sofia", 6]);
smallShop(["water", "Plovdiv", 3]);
smallShop(["sweets", "Sofia", 2.23]);