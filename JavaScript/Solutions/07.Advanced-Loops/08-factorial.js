function factorial([arg1]){
    let n = Number(arg1);
    let fact = 1;
    do
    {
        fact = fact * n;
        n--;
    } while (n > 1);
    console.log(fact);
}

factorial([5]);
factorial([6]);
factorial([10]);
factorial([1]);
factorial([2]);