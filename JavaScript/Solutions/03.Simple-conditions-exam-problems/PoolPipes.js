function poolPipes([volume, pipe1, pipe2, hours]) {

    let water = (pipe1 * hours) + (pipe2 * hours);

    if (water <= volume) {
        console.log(
            `The pool is ${Math.trunc(water / volume * 100)}% full. 
            Pipe 1: ${Math.trunc(pipe1 * hours / water * 100)}%.
            Pipe 2: ${Math.trunc(pipe2 * hours / water * 100)}%.`);
    }
    else {
        console.log(
            `For ${hours} hours the pool overflows with ${water - volume} liters.`);
    }
}
