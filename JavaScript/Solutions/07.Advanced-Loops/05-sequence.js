function sequence([arg1]){
    let n = Number(arg1);
    let num = 1;
    //console.log("For n = " + n);
    while(num <= n){
        console.log(num);
        num = num * 2 + 1;
    }
    //console.log();
}

sequence([3]);
sequence([8]);
sequence([17]);
sequence([31]);