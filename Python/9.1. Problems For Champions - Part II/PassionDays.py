shoppingMoney = float(input())
purchases = 0
command = input()

while command != "mall.Enter":
    command = input()

command = input()

while command != "mall.Exit":
    for action in command:
        if action >= 'A' and action <= 'Z':
            price = ord(action) * 0.5
            if shoppingMoney < price:
                continue

            shoppingMoney -= price
            purchases += 1
        elif action >= 'a' and action <= 'z':
            price = ord(action) * 0.3
            if shoppingMoney < price:
                continue

            shoppingMoney -= price
            purchases += 1
        elif action == '%':
            if shoppingMoney > 0:
                shoppingMoney /= 2
                purchases += 1
        elif action == '*':
            shoppingMoney += 10
        else:
            price = ord(action)
            if shoppingMoney < price:
                continue

            shoppingMoney -= price
            purchases += 1

    command = input()

if purchases == 0:
    print("No purchases. Money left: %.2f lv." % shoppingMoney)
else:
    print("%d purchases. Money left: %.2f lv." % (purchases, shoppingMoney))
