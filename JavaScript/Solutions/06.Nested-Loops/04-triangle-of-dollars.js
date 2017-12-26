function triangleOfDollars([arg1]){
    let n = Number(arg1);
    for (let i = 1; i <= n; i++) {
        console.log("$ ".repeat(i))
    }
}

triangleOfDollars([2]);
triangleOfDollars([3]);
triangleOfDollars([4]);
triangleOfDollars([5]);