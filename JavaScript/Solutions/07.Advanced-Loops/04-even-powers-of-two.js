function evenPowersOfTwo([arg1]){
    let n = Number(arg1);
    let num = 1;
    //console.log("For n = " + n);
    for (let i = 0; i <= n; i+=2) {
        console.log(num);
        num *= 4;
    }
    //console.log();
}

evenPowersOfTwo([3]);
evenPowersOfTwo([4]);
evenPowersOfTwo([5]);
evenPowersOfTwo([6]);
evenPowersOfTwo([7]);