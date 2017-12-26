function christmasTree([arg1]){
    let n = Number(arg1);
    for (var i = 0; i < n+1; i++) {
        console.log(" ".repeat(n-i)+"*".repeat(i)+" | "+"*".repeat(i)+" ".repeat(n-i));
    }
}

christmasTree([1]);
christmasTree([2]);
christmasTree([3]);
christmasTree([4]);