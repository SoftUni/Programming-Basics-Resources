function checkPrime([arg1]){
    let n = Number(arg1);
    let prime = true;
    console.log("n = " + n);
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i == 0) {
            prime = false;
            break;
        }
    if (prime && n>2) console.log("Prime");
    else console.log("Not prime");
    console.log();
}

checkPrime([2]);
checkPrime([3]);
checkPrime([4]);
checkPrime([5]);
checkPrime([7]);
checkPrime([1]);
checkPrime([0]);
checkPrime([-1]);
checkPrime([149]);