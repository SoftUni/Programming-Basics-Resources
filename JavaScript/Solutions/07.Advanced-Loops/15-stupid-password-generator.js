function passwordGenerator([arg1,arg2]) {
    let n = Number(arg1);
    let l = Number(arg2);

    let result = "";

    for (let s1 = 1; s1 <= n; s1++){
        for (let s2 = 1; s2 <= n; s2++){
            for(let s3 = 97; s3 < 97 + l; s3++){
                for(let s4 = 97; s4 < 97 + l; s4++){
                    for(let s5 = 1; s5 <= n; s5++){
                        if(s5 > s1 && s5 > s2){
                            result += "" + s1 + s2 + String.fromCharCode(s3) + String.fromCharCode(s4) + s5 + " ";
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}

    passwordGenerator(["2","4"]);
    console.log();
    passwordGenerator(["3","1"]);
    console.log();
    passwordGenerator(["3","2"]);
    console.log();
    passwordGenerator(["4","2"]);
    console.log();