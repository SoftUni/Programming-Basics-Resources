function areEqual([arg1, arg2]) {
    let firstWord = arg1.toLowerCase();
    let secondWord = arg2.toLowerCase();
    if (firstWord == secondWord) {
        console.log("yes");
    }
    else {
        console.log("no");
    }
}

areEqual(["Hello","Hello"]);
areEqual(["SoftUni","softuni"]);
areEqual(["Soft","Uni"]);
areEqual(["beer","vodka"]);
areEqual(["HeLlO","hELLo"]);