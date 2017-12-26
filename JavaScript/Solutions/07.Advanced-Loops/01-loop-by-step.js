function loopByStep3([arg1]){
    let n = Number(arg1);
   // console.log("n = " +n);
   // console.log("The numbers are:");
    for (let i = 1; i <= n; i+=3) {
        console.log(i);
    }
}

loopByStep3([7]);
loopByStep3([10]);
loopByStep3([15]);