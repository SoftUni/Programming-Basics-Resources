function gcd([arg1, arg2]){
    let a = Number(arg1);
    let b = Number(arg2);
    while (b != 0)
    {
        let oldB = b;
        b = a % b;
        a = oldB;
    }
    console.log("GCD = "+ a);
}

gcd([24,16]);
gcd([67,18]);
gcd([15,9]);
gcd([100,88]);
gcd([10,10]);