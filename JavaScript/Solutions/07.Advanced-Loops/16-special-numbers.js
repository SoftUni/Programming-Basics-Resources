function specialNumbers([arg1]){
    let n = Number(arg1);

    let result = "";

    for(let a = 1; a <= 9; a ++){
        for(let b = 1; b <= 9; b++){
            for(let c = 1; c <= 9; c++){
                for(let d = 1; d <= 9; d++){
                    if(n % a == 0 && n % b == 0 && n%c == 0 && n%d == 0){
                        result += "" + a + b + c + d + " ";
                    }
                }
            }
        }
    }
    console.log(result);
}

specialNumbers(["3"]);
console.log();
specialNumbers(["11"]);
console.log();
specialNumbers(["16"]);
console.log();