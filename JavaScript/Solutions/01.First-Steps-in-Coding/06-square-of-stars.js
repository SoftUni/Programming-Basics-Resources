function Expression(num){
    let n = parseInt(num);  
    console.log(('*').repeat(n));
    for(let i = 0; i < n-2; i++){
        console.log('*' + ' '.repeat(n-2) + '*');
    }
    console.log(('*').repeat(n));
}