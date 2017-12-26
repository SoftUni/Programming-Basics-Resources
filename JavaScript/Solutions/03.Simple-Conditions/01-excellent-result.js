function isExcellent([arg1]){
    let grade = Number(arg1);
    if(grade>= 5.5){
        console.log("Excellent!");
    }
}

isExcellent([6]);
isExcellent([5]);
isExcellent([5.50]);
isExcellent([5.49]);