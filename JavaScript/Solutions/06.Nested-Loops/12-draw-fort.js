function drawFort([arg1]){
    let n = Number(arg1);
    //Draw first row
    console.log("/" + "^".repeat(Math.floor(n/2)) + "\\" + "_".repeat(2 * n - 4 - Math.floor(n/2) * 2 > 0 ?2 * n - 4 - Math.floor(n/2) * 2  : 0) + "/" + "^".repeat(Math.floor(n/2)) + "\\")
    //Draw mid part
    for(let i = 0; i < n-2; i++){
        if(i == n-3){
            console.log("|" + " ".repeat(Math.floor(n/2)+1) + "_".repeat(2 * n - 4 - Math.floor(n/2) * 2 > 0 ?2 * n - 4 - Math.floor(n/2) * 2  : 0) + " ".repeat(Math.floor(n/2)+1) + "|");
            
        } else {
            console.log("|" + " ".repeat(2 * n - 2) + "|");
        }
    }
    //Draw last row
    console.log("\\" + "_".repeat(Math.floor(n/2)) + "/" + " ".repeat(2 * n - 4 - Math.floor(n/2) * 2 ) + "\\" + "_".repeat(Math.floor(n/2)) + "/");
}

console.log("n = ", 3);
drawFort(["3"]);
console.log();
console.log("n = ", 4);
drawFort(["4"]);
console.log();
console.log("n = ", 5);
drawFort(["5"]);
console.log();
console.log("n = ", 8);
drawFort(["8"]);
console.log();