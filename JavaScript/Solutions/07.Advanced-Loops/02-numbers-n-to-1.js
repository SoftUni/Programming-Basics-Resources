function reverseLoop([arg1]){
    let n = Number(arg1);
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}

reverseLoop([2]);
reverseLoop([3]);
reverseLoop([5]);