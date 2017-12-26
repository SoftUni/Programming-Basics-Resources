function squareFrame([arg1]){
    let n = Number(arg1);
    //first row
    console.log("+ " + "- ".repeat(n-2) + "+");
    //mid rows
    for (let i = 0; i < n-2; i++) {
        console.log("| " + "- ".repeat(n-2) + "|");
    }
    //last row
    console.log("+ " + "- ".repeat(n-2) + "+");
}

squareFrame([3]);
squareFrame([4]);
squareFrame([5]);
squareFrame([6]);