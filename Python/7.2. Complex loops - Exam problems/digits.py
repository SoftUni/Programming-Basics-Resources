n = int(input())
result = ""
cn = n
number = str(cn)
N = int(number[0]) + int(number[1])
M = int(number[0]) + int(number[2])

for i in range(0, N):
    result = ""
    for j in range(0, M):
        if(cn % 5 == 0):
            cn -= int(number[0])
        elif (cn % 3 == 0):
            cn -= int(number[1])
        else:
            cn += int(number[2])
        result += str(cn) + " "
    print(result.strip())
