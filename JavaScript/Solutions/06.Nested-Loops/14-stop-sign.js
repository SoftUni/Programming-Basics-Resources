function stopSign([arg1]){
    let n = Number(arg1);

    console.log(".".repeat(n+1) + "_".repeat(2 * n +1) + ".".repeat(n+1));

    for(let i = 0; i <= n; i ++){
        if(i == n){            
            console.log(".".repeat(n-i) + "//" + "_".repeat((n*4 + -6) / 2) + "STOP!" + "_".repeat((n*4 + -6) / 2) + "\\\\" + ".".repeat(n - i));
        } else {
            console.log(".".repeat(n-i) + "//" + "_".repeat(n * 2 - 1 + 2 * i) + "\\\\" + ".".repeat(n - i));
        }
    }

    for(let i = n; i > 0; i--){
        console.log(".".repeat(n-i) + "\\\\" + "_".repeat(n * 2 - 1 + 2 * i) + "//" + ".".repeat(n - i));
    }
}
console.log("n = ", 3)
stopSign(["3"]);
console.log();
console.log("n = ", 6)
stopSign(["6"]);
console.log();
console.log("n = ", 7)
stopSign(["7"]);
console.log();