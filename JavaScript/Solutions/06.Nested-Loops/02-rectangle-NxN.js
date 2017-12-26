function rectangle([arg1]){
    let n = Number(arg1);
    for (let i = 0; i < n; i++) {
        console.log("*".repeat(n));
    }
}

rectangle([2]);
rectangle([3]);
rectangle([4]);