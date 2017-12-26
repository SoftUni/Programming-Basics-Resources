function isInvalid([arg1]){
    let num = Number(arg1);
    let inRange = (num >= 100 && num <= 200) || num == 0;
    if (!inRange)
        console.log("invalid");
}

isInvalid([75]);
isInvalid([150]);
isInvalid([220]);
isInvalid([199]);
isInvalid([-1]);
isInvalid([100]);
isInvalid([200]);
isInvalid([0]);