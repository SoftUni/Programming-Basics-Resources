function harvest(
    [vineyardArea, grapePerSquare, neededLiters, workers]) {

    let harvestPerVine = (vineyardArea * grapePerSquare) * 0.4;
    let vine = harvestPerVine / 2.5;

    if (vine >= neededLiters) {
        let vineLeft = vine - neededLiters;
        console.log(`Good harvest this year! Total wine: ${Math.floor(vine)} liters.`);
        console.log(`${Math.ceil(vineLeft)} liters left -> ${Math.ceil((vineLeft / workers))} liters per person.`);
    }
    else {
        console.log(`It will be a tough winter! More ${Math.floor(neededLiters - vine)} liters wine needed.`);
    }
}
