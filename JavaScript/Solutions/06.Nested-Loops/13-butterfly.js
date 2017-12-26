function butterfly([arg1]){
    let n = Number(arg1);

    //Draw first part
    for (let i = 1; i <= n-2; i ++){
        if(i % 2 == 1){
            console.log("*".repeat(n-2) + "\\" + " " + "/" + "*".repeat(n-2));
        } else {
            console.log("-".repeat(n-2) + "\\" + " " + "/" + "-".repeat(n-2));
        }
    }
    //Draw mid row
    console.log(" ".repeat(n - 1) + "@" + " ".repeat(n - 1));
    //Draw second part
    for (let i = 1; i <= n-2; i ++){
        if(i % 2 == 1){
            console.log("*".repeat(n-2) + "/" + " " + "\\" + "*".repeat(n-2));
        } else {
            console.log("-".repeat(n-2) + "/" + " " + "\\" + "-".repeat(n-2));
        }
    }
}
console.log("n = ", 3);
butterfly(["3"]);
console.log();
console.log("n = ", 5);
butterfly(["5"]);
console.log();
console.log("n = ", 7);
butterfly(["7"]);
console.log();