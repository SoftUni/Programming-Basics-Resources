function solve(secretNum, bulls, cows) {
    let guessNumber = parseInt(secretNum);
    let targetBulls = bulls;
    let targetCows = cows;

    let solutionFound = false;

    for (let digit1 = 1; digit1 <= 9; digit1++)
    {
        for (let digit2 = 1; digit2 <= 9; digit2++)
        {
            for (let digit3 = 1; digit3 <= 9; digit3++)
            {
                for (let digit4 = 1; digit4 <= 9; digit4++)
                {
                    let guessDigit1 = Math.floor(guessNumber / 1000) % 10;
                    let guessDigit2 = Math.floor(guessNumber / 100) % 10;
                    let guessDigit3 = Math.floor(guessNumber / 10) % 10;
                    let guessDigit4 = Math.floor(guessNumber / 1) % 10;

                    let digitToCheck1 = digit1;
                    let digitToCheck2 = digit2;
                    let digitToCheck3 = digit3;
                    let digitToCheck4 = digit4;

                    let currentBulls = 0;
                    let currentCows = 0;

                    // Find all bulls, count them and remove them (assign -1 and -2)
                    if (digitToCheck1 == guessDigit1)
                    {
                        // Bull at position #1 found -> count it and remove it
                        currentBulls++;
                        guessDigit1 = -1;
                        digitToCheck1 = -2;
                    }

                    if (digitToCheck2 == guessDigit2)
                    {
                        // Bull at position #2 found -> count it and remove it
                        currentBulls++;
                        guessDigit2 = -1;
                        digitToCheck2 = -2;
                    }

                    if (digitToCheck3 == guessDigit3)
                    {
                        // Bull at position #3 found -> count it and remove it
                        currentBulls++;
                        guessDigit3 = -1;
                        digitToCheck3 = -2;
                    }

                    if (digitToCheck4 == guessDigit4)
                    {
                        // Bull at position #4 found -> count it and remove it
                        currentBulls++;
                        guessDigit4 = -1;
                        digitToCheck4 = -2;
                    }

                    // Find all cows for digitToCheck1, count them and remove them (assign -1)
                    if (digitToCheck1 == guessDigit2)
                    {
                        // Cow at position #2 found -> count it and remove it
                        currentCows++;
                        guessDigit2 = -1;
                    }
                    else if (digitToCheck1 == guessDigit3)
                    {
                        // Cow at position #3 found -> count it and remove it
                        currentCows++;
                        guessDigit3 = -1;
                    }
                    else if (digitToCheck1 == guessDigit4)
                    {
                        // Cow at position #4 found -> count it and remove it
                        currentCows++;
                        guessDigit4 = -1;
                    }

                    // Find all cows for d2, count them and remove them (assign -1)
                    if (digitToCheck2 == guessDigit1)
                    {
                        // Cow at position #1 found -> count it and remove it
                        currentCows++;
                        guessDigit1 = -1;
                    }
                    else if (digitToCheck2 == guessDigit3)
                    {
                        // Cow at position #3 found -> count it and remove it
                        currentCows++;
                        guessDigit3 = -1;
                    }
                    else if (digitToCheck2 == guessDigit4)
                    {
                        // Cow at position #4 found -> count it and remove it
                        currentCows++;
                        guessDigit4 = -1;
                    }

                    // Find all cows for d3, count them and remove them (assign -1)
                    if (digitToCheck3 == guessDigit1)
                    {
                        // Cows at position #1 found -> count it and remove it
                        currentCows++;
                        guessDigit1 = -1;
                    }
                    else if (digitToCheck3 == guessDigit2)
                    {
                        // Cow at position #2 found -> count it and remove it
                        currentCows++;
                        guessDigit2 = -1;
                    }
                    else if (digitToCheck3 == guessDigit4)
                    {
                        // Cow at position #4 found -> count it and remove it
                        currentCows++;
                        guessDigit4 = -1;
                    }

                    // Find all cows for d4, count them and remove them (assign -1)
                    if (digitToCheck4 == guessDigit1)
                    {
                        // Cows at position #1 found -> count it and remove it
                        currentCows++;
                        guessDigit1 = -1;
                    }
                    else if (digitToCheck4 == guessDigit2)
                    {
                        // Cow at position #2 found -> count it and remove it
                        currentCows++;
                        guessDigit2 = -1;
                    }
                    else if (digitToCheck4 == guessDigit3)
                    {
                        // Cow at position #3 found -> count it and remove it
                        currentCows++;
                        guessDigit3 = -1;
                    }

                    if (currentBulls == targetBulls && currentCows == targetCows)
                    {
                        if (solutionFound)
                        {
                            console.log(" ");
                        }

                        console.log(digit1 + '' + digit2 + '' + digit3 + '' + digit4);
                        solutionFound = true;
                    }
                }
            }
        }
    }

    if (!solutionFound)
    {
        console.log('No');
    }
}

solve(2228, 2, 1); /* 1222 2122 2212 2232 2242 2252 2262 2272 2281 2283 2284 2285 2286 2287 2289 2292 2322 2422 2522 2622 2722 2821 2823 2824 2825 2826 2827 2829 2922 3222 4222 5222 6222 7222 8221 8223 8224 8225 8226 8227 8229 9222 */
solve(1234, 3, 0); /* 1134 1214 1224 1231 1232 1233 1235 1236 1237 1238 1239 1244 1254 1264 1274 1284 1294 1334 1434 1534 1634 1734 1834 1934 2234 3234 4234 5234 6234 7234 8234 9234 */
solve(1234, 3, 1); /* No */
