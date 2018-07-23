n = int(input())
l = int(input())

result = ''
for s1 in range(1, n + 1):
    for s2 in range(1, n + 1):
        for s3 in range(ord('a'), l + ord('a')):
            for s4 in range(ord('a'), l + ord('a')):
                for s5 in range(max(s1,s2) + 1, n + 1):
                    result += ('' + str(s1) + str(s2)
                               + chr(s3) + chr(s4)
                               + str(s5) + ' ')
print(result.strip())

