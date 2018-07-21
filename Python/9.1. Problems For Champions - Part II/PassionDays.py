shopping_money = float(input())
purchases = 0
command = input()

while command != "mall.Enter":
    command = input()

command = input()

while command != "mall.Exit":
    for action in command:
        if action >= 'A' and action <= 'Z':
            price = ord(action) * 0.5
            if shopping_money < price:
                continue

            shopping_money -= price
            purchases += 1
        elif action >= 'a' and action <= 'z':
            price = ord(action) * 0.3
            if shopping_money < price:
                continue

            shopping_money -= price
            purchases += 1
        elif action == '%':
            if shopping_money > 0:
                shopping_money /= 2
                purchases += 1
        elif action == '*':
            shopping_money += 10
        else:
            price = ord(action)
            if shopping_money < price:
                continue

            shopping_money -= price
            purchases += 1

    command = input()

if purchases == 0:
    print("No purchases. Money left: %.2f lv." % shopping_money)
else:
    print("%d purchases. Money left: %.2f lv." % (purchases, shopping_money))
