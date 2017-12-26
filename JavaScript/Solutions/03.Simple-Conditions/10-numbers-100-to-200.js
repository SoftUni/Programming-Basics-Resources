function checkNumber([arg1]) {
    let num = Number(arg1);
    if (num > 200) {
        console.log("Greater than 200");
    }
    else if (num >= 100) {
        console.log("Between 100 and 200");
    }
    else {
        console.log("Less than 100");
    }
}

checkNumber([95]);
checkNumber([120]);
checkNumber([210]);