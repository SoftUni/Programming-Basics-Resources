guess_number = input()
target_bulls = int(input())
target_cows = int(input())


solution_found = False

for digit_1 in range(1, 10):
    for digit_2 in range(1, 10):
        for digit_3 in range(1, 10):
            for digit_4 in range(1, 10):

                guess_digit_1 = int(guess_number[0:1])
                guess_digit_2 = int(guess_number[1:2])
                guess_digit_3 = int(guess_number[2:3])
                guess_digit_4 = int(guess_number[3:4])

                digit_to_check_1 = digit_1
                digit_to_check_2 = digit_2
                digit_to_check_3 = digit_3
                digit_to_check_4 = digit_4

                current_bulls = 0
                current_cows = 0

                # Find all bulls, count them and remove them (assign -1 and -2)
                if digit_to_check_1 == guess_digit_1:
                    # Bull at position #1 found -> count it and remove it
                    current_bulls += 1
                    guess_digit_1 = -1
                    digit_to_check_1 = -2

                if digit_to_check_2 == guess_digit_2:
                    # Bull at position #2 found -> count it and remove it
                    current_bulls += 1
                    guess_digit_2 = -1
                    digit_to_check_2 = -2

                if digit_to_check_3 == guess_digit_3:
                    # Bull at position #3 found -> count it and remove it
                    current_bulls += 1
                    guess_digit_3 = -1
                    digit_to_check_3 = -2

                if digit_to_check_4 == guess_digit_4:
                    # Bull at position #4 found -> count it and remove it
                    current_bulls += 1
                    guess_digit_4 = -1
                    digit_to_check_4 = -2

                # Find all cows for digitToCheck1, count them and remove them (assign -1)
                if digit_to_check_1 == guess_digit_2:
                    # Cow at position #2 found -> count it and remove it
                    current_cows += 1
                    guess_digit_2 = -1
                elif digit_to_check_1 == guess_digit_3:
                    # Cow at position #3 found -> count it and remove it
                    current_cows += 1
                    guess_digit_3 = -1
                elif digit_to_check_1 == guess_digit_4:
                    # Cow at position #4 found -> count it and remove it
                    current_cows += 1
                    guess_digit_4 = -1

                # Find all cows for d2, count them and remove them (assign -1)
                if digit_to_check_2 == guess_digit_1:
                    # Cow at position #1 found -> count it and remove it
                    current_cows += 1
                    guess_digit_1 = -1
                elif digit_to_check_2 == guess_digit_3:
                    # Cow at position #3 found -> count it and remove it
                    current_cows += 1
                    guess_digit_3 = -1
                elif digit_to_check_2 == guess_digit_4:
                    # Cow at position #4 found -> count it and remove it
                    current_cows += 1
                    guess_digit_4 = -1

                # Find all cows for d3, count them and remove them (assign -1)
                if digit_to_check_3 == guess_digit_1:
                    # Cows at position #1 found -> count it and remove it
                    current_cows += 1
                    guess_digit_1 = -1
                elif digit_to_check_3 == guess_digit_2:
                    # Cow at position #2 found -> count it and remove it
                    current_cows += 1
                    guess_digit_2 = -1
                elif digit_to_check_3 == guess_digit_4:
                    # Cow at position #4 found -> count it and remove it
                    current_cows += 1
                    guess_digit_4 = -1

                # Find all cows for d4, count them and remove them (assign -1)
                if digit_to_check_4 == guess_digit_1:
                    # Cows at position #1 found -> count it and remove it
                    current_cows += 1
                    guess_digit_1 = -1
                elif digit_to_check_4 == guess_digit_2:
                    # Cow at position #2 found -> count it and remove it
                    current_cows += 1
                    guess_digit_2 = -1
                elif digit_to_check_4 == guess_digit_3:
                    # Cow at position #3 found -> count it and remove it
                    current_cows += 1
                    guess_digit_3 = -1

                if current_bulls == target_bulls and current_cows == target_cows:
                    if solution_found:
                        print(" ", end="")

                    print("%d%d%d%d" % (digit_1, digit_2, digit_3, digit_4), end="")
                    solution_found = True

if not solution_found:
    print("No")