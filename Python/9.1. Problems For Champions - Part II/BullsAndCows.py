guessNumber = input()
targetBulls = int(input())
targetCows = int(input())
solutionFound = False

for digit1 in range(1, 10):
    for digit2 in range(1, 10):
        for digit3 in range(1, 10):
            for digit4 in range(1, 10):
                guessDigit1 = int(guessNumber[0:1])
                guessDigit2 = int(guessNumber[1:2])
                guessDigit3 = int(guessNumber[2:3])
                guessDigit4 = int(guessNumber[3:4])

                digitToCheck1 = digit1
                digitToCheck2 = digit2
                digitToCheck3 = digit3
                digitToCheck4 = digit4

                currentBulls = 0
                currentCows = 0

                # Find all bulls, count them and remove them (assign -1 and -2)
                if digitToCheck1 == guessDigit1:
                    # Bull at position #1 found -> count it and remove it
                    currentBulls += 1
                    guessDigit1 = -1
                    digitToCheck1 = -2

                if digitToCheck2 == guessDigit2:
                    # Bull at position #2 found -> count it and remove it
                    currentBulls += 1
                    guessDigit2 = -1
                    digitToCheck2 = -2

                if digitToCheck3 == guessDigit3:
                    # Bull at position #3 found -> count it and remove it
                    currentBulls += 1
                    guessDigit3 = -1
                    digitToCheck3 = -2

                if digitToCheck4 == guessDigit4:
                    # Bull at position #4 found -> count it and remove it
                    currentBulls += 1
                    guessDigit4 = -1
                    digitToCheck4 = -2

                # Find all cows for digitToCheck1, count them and remove them (assign -1)
                if digitToCheck1 == guessDigit2:
                    # Cow at position #2 found -> count it and remove it
                    currentCows += 1
                    guessDigit2 = -1
                elif digitToCheck1 == guessDigit3:
                    # Cow at position #3 found -> count it and remove it
                    currentCows += 1
                    guessDigit3 = -1
                elif digitToCheck1 == guessDigit4:
                    # Cow at position #4 found -> count it and remove it
                    currentCows += 1
                    guessDigit4 = -1

                # Find all cows for d2, count them and remove them (assign -1)
                if digitToCheck2 == guessDigit1:
                    # Cow at position #1 found -> count it and remove it
                    currentCows += 1
                    guessDigit1 = -1
                elif digitToCheck2 == guessDigit3:
                    # Cow at position #3 found -> count it and remove it
                    currentCows += 1
                    guessDigit3 = -1
                elif digitToCheck2 == guessDigit4:
                    # Cow at position #4 found -> count it and remove it
                    currentCows += 1
                    guessDigit4 = -1

                # Find all cows for d3, count them and remove them (assign -1)
                if digitToCheck3 == guessDigit1:
                    # Cows at position #1 found -> count it and remove it
                    currentCows += 1
                    guessDigit1 = -1
                elif digitToCheck3 == guessDigit2:
                    # Cow at position #2 found -> count it and remove it
                    currentCows += 1
                    guessDigit2 = -1
                elif digitToCheck3 == guessDigit4:
                    # Cow at position #4 found -> count it and remove it
                    currentCows += 1
                    guessDigit4 = -1

                # Find all cows for d4, count them and remove them (assign -1)
                if digitToCheck4 == guessDigit1:
                    # Cows at position #1 found -> count it and remove it
                    currentCows += 1
                    guessDigit1 = -1
                elif digitToCheck4 == guessDigit2:
                    # Cow at position #2 found -> count it and remove it
                    currentCows += 1
                    guessDigit2 = -1
                elif digitToCheck4 == guessDigit3:
                    # Cow at position #3 found -> count it and remove it
                    currentCows += 1
                    guessDigit3 = -1

                if currentBulls == targetBulls and currentCows == targetCows:
                    if solutionFound:
                        print(" ", end="")

                    print("%d%d%d%d" % (digit1, digit2, digit3, digit4), end="")
                    solutionFound = True

if not solutionFound:
    print("No")