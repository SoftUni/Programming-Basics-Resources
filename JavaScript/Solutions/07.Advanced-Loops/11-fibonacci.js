function fibonacci([arg1]){
    let n = Number(arg1);
    let f0 = 1;
    let f1 = 1;
    //console.log("For n = " + n);
    for (let i = 0; i < n-1; i++)
    {
        let fNext = f0 + f1;
        f0 = f1;
        f1 = fNext;
    }
    console.log(f1);
}

fibonacci([0]);
fibonacci([1]);
fibonacci([2]);
fibonacci([5]);
fibonacci([10]);