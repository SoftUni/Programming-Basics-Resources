n = int(input())
m = int(input())
s = int(input())

result = ''

for i in range(m, n - 1, -1):
    if( i % 6 == 0):
        if(i == s):
            break
        result += '' + str(i) + ' '
print(result)
