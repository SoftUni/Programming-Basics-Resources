function rhombus([arg1]){
    let n = Number(arg1);
    //print upper half
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n-i) + "* ".repeat(i) + " ".repeat(n-i));
    }
    //print lower half
    for (let i = n-1; i >= 1; i--) {
        console.log(" ".repeat(n-i) + "* ".repeat(i) + " ".repeat(n-i));
    }
}

rhombus([1]);
rhombus([2]);
rhombus([3]);
rhombus([4]);