function powersOfTwo([arg1]){
    let n = Number(arg1);
    let num = 1;
    for (var i = 0; i <= n; i++) {
        console.log(num);
        num *= 2;
    }
}

powersOfTwo([3]);
powersOfTwo([4]);
powersOfTwo([5]);