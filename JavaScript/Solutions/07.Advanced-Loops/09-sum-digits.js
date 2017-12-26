function sumDigits([arg1]){
    let n = Number(arg1);
    let sum = 0;
    do
    {
        sum = sum + (n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);
    console.log("Sum of digits: " + sum);
}

sumDigits([5634]);
sumDigits([19]);
sumDigits([5]);
sumDigits([17151]);