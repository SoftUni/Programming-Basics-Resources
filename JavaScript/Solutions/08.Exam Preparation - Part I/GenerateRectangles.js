function solve([n, m]) {
    n = Number(n);
    m = Number(m);
    let count = 0;

    for (let left = -n; left < n; left++) {
        for (let top = -n; top < n; top++) {
            for (let right = left + 1; right <= n; right++) {
                for (let bottom = top + 1; bottom <= n; bottom++) {
                    let area = Math.abs(right - left) * Math.abs(bottom - top);

                    if(area >= m) {
                        console.log(
                            '(' + left + ', ' + top + ') (' + 
                            right + ', ' + bottom + ') -> ' + area
                        );
                        count++;
                    }
                }
            }
        }
    }

    if (count === 0) console.log('No');
}

solve([1, 2]);
solve([2, 17]);
solve([3, 36]);