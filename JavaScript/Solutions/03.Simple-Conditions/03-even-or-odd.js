function evenOrOdd([arg1]){
    let num = Number(arg1);
    if(num % 2 == 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}

evenOrOdd([2]);
evenOrOdd([3]);
evenOrOdd([25]);
evenOrOdd([1024]);