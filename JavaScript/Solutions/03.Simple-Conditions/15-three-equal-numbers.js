function threeEqual([arg1, arg2, arg3]) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let num3 = Number(arg3);
    let notEqual = true;
    if(num1 == num2){
        if(num2 == num3){
            console.log("yes");
            notEqual = false;
        }
    }
    if(notEqual){
        console.log("no");
    }
}

threeEqual([1,1,2]);
threeEqual([1,1,1]);
threeEqual([1,33,2]);