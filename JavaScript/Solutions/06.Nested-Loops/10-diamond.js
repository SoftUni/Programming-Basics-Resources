function diamond([arg1]) {
    let n = Number(arg1);

    if (n % 2 == 0) {
        //Draw the first half
        for (let i = 0; i < Math.floor(n / 2); i++) {
            console.log("-".repeat(Math.floor((n - 1) / 2) - i) + "*" + "-".repeat(2 * i) + "*" + "-".repeat(Math.floor((n - 1) / 2) - i));
        }
        //Draw the second half
        for (let i = Math.floor((n - 1) / 2)-1; i >= 0; i--) {
            console.log("-".repeat(Math.floor((n - 1) / 2) - i) + "*" + "-".repeat(2 * i) + "*" + "-".repeat(Math.floor((n - 1) / 2) - i));
        }
    } else {
        //Draw the first half
        for (let i = 0; i < Math.floor(n / 2)+1; i++) {
            if (i != 0)
                console.log("-".repeat(Math.floor((n - 1) / 2) - i) + "*" + "-".repeat(2 * i - 1) + "*" + "-".repeat(Math.floor((n - 1) / 2) - i));
            else
                console.log("-".repeat(Math.floor((n - 1) / 2) - i) + "*" + "-".repeat(Math.floor((n - 1) / 2) - i));
        }
        //Draw the second half            
        for (let i = Math.floor((n - 1) / 2) - 1; i >= 0; i--) {   
            if(i > 0)          
            console.log("-".repeat(Math.floor((n - 1) / 2) - i) + "*" + "-".repeat(2 * i - 1) + "*" + "-".repeat(Math.floor((n - 1) / 2) - i));
            else
                console.log("-".repeat(Math.floor((n - 1) / 2)) + "*" + "-".repeat(Math.floor((n - 1) / 2)));
        }
    }                                                                        
}
console.log(1);
diamond([1]);
console.log();
console.log(2);
console.log();
diamond([2]);
console.log();
console.log(3);
diamond([3]);
console.log();
console.log(4);
diamond([4]);
console.log();
console.log(5);
diamond([5]);
console.log();
console.log(6);
diamond([6]);
console.log();
console.log(7);
diamond([7]);
console.log();
console.log(8);
diamond([8]);
console.log();
console.log(9);
diamond([9]);
