function fruitOrVegetable([arg1]){
    let p = arg1;
    if (p == "banana" || p == "apple" || p == "kiwi" ||
        p == "cherry" || p == "lemon" || p == "grapes")
        console.log("fruit");
    else if (p == "tomato" || p == "cucumber" || p == "pepper" || p == "carrot")
        console.log("vegetable");
    else
        console.log("unknown");
}

fruitOrVegetable(["banana"]);
fruitOrVegetable(["apple"]);
fruitOrVegetable(["tomato"]);
fruitOrVegetable(["water"]);