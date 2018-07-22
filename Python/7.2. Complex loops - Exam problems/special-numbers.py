n = int(input())
result = ""
for a in range(1, 10):
    for b in range(1, 10):
        for c in range(1, 10):
            for d in range(1, 10):
                if(n % a == 0 and n % b == 0 and n%c == 0 and n%d == 0):
                    result += "" + str(a) + str(b) + str(c) + str(d) + " "
print(result)
