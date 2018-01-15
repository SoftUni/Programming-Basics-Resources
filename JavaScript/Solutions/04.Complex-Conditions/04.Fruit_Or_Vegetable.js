function fruitOrVegetable([arg1]) {

    let s = arg1;

    if (s === "banana" || s === "apple" || s === "kiwi" ||
        s === "cherry" || s === "lemon" || s === "grapes") {
        console.log("fruit");
    }

    else if (s === "tomato" || s === "cucumber" || s === "pepper" || s === "carrot") {
        console.log("vegetable");
    }

    else {
        console.log("unknown");
    }
}


fruitOrVegetable(["banana"]);
fruitOrVegetable(["tomato"]);
fruitOrVegetable(["java"]);