function pyramid([arg1]){
    let n = Number(arg1);
    let num = 1;
    let result = "";
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            if (col > 1) {
                result += " ";
            }
            result += num;
            num++;
            if (num > n) break;
        }
        console.log(result);
        result = "";
        if (num > n) break;
    }
}

pyramid([7]);
pyramid([10]);
pyramid([12]);
pyramid([15]);