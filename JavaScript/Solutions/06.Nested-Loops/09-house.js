function house([arg1]){
    let n = Number(arg1);
    let starsCount = 0;
    console.log(n%2)
    //house roof    
    for (let i = 0; i < Math.floor((n+1)/2); i++) {
        if(n%2==0){
            
            starsCount = 2*(i+1);
        }
        else {
            starsCount = 2*i+1;
        }
        console.log("-".repeat((n-starsCount)/2) + "*".repeat(starsCount) + "-".repeat((n-starsCount)/2));
    }    
    //house walls
    for (let i = 0; i < Math.floor(n/2); i++) {
        console.log("|" + "*".repeat(n-2) + "|");
    }
    console.log();
}

house([2]);
house([3]);
house([4]);
house([5]);
house([6]);