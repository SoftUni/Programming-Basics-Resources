function animalType([arg1]) {

    let animal = arg1.toLowerCase();

    switch (animal) {
        case "dog": console.log("mammal"); break;
        case "crocodile":
        case "tortoise":
        case "snake": console.log("reptile"); break;
        default: console.log("unknown");
    }
}


animalType(["tortoise"]);
animalType(["dog"]);
animalType(["elephant"]);