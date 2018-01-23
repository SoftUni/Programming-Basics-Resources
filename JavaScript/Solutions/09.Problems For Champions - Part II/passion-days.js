function solve(shoppingMoney, commands) {
    console.log(shoppingMoney);
    shoppingMoney -= 1000;
    console.log(shoppingMoney);

    let i = 0;
    let purchases = 0;
    let command = commands[0];

    while (command !== 'mall.Enter') {
        i++;
        command = command[i];
        // command = command[++i];
    }

    // for (let i = 0; commands[i] !== 'mall.Enter'; i++);

    i++; // Skip `mall.Enter` command
    for (; commands[i] !== 'mall.Exit'; i++) {
        command = commands[i];

        for (let action of command) {
            if (action >= 'A' && action <= 'Z') {
                let price = action.charCodeAt() * 0.5;

                if (shoppingMoney < price) {
                    continue;
                }

                shoppingMoney -= price;
                purchases++;
            }
            else if (action >= 'a' && action <= 'z') {
                let price = action.charCodeAt() * 0.3;

                if (shoppingMoney < price)
                {
                    continue;
                }

                shoppingMoney -= price;
                purchases++;
            }
            else if (action == '%') {
                if (shoppingMoney > 0)
                {
                    shoppingMoney /= 2;
                    purchases++;
                }
            }
            else if (action == '*') {
                shoppingMoney += 10;
            }
            else {
                let price = action;
                if (shoppingMoney < price)
                {
                    continue;
                }

                shoppingMoney -= price;
                purchases++;
            }
        }
    }

    // TODO: Format money
    if (purchases == 0) {
        console.log("No purchases. Money left:" + shoppingMoney.toFixed(2) + " lv.");
    }
    else {
        console.log(purchases + " purchases. Money left: " + shoppingMoney.toFixed(2) + " lv.");
    }
}

solve(110, ['mall.Enter', 'd', 'mall.Exit']);
solve(110, ['mall.Enter', '%', 'mall.Exit']);
solve(100, ['mall.Enter', 'Ab', '**', 'mall.Exit']);

let input = ['mall.Enter',
'%%%%%%%%%%JHZJHJZKLZ',
'!@#$%^&())%%%%%%%%%%',
'(&^%$#@!%%%%%%%%%%%%',
')(&^%$#@#$%^&(******',
'<><<><><><><>[][][][',
'ABCDEFGHIJKLMNO}}}}}',
'PQRSTUVWXYZ{{{{{{{{{',
'abcdefghijkl()()()()',
'mnopqrstuvwjdkajsfdk',
'xyz1234567890DAJSHJA',
'1234567890ASLKDJAKJD',
'ABCDEFGHIJKLMNOUDSAD',
'PQRSTUVWXYZ987987988',
'abcdefghijkl12345676',
'mnopqrstuvw  HJHJDSD',
'xyz1234567890&*&^%^$',
'1234567890hdkjashkdd',
'hjk;jhdajksdhsakldla',
'mall.Exit',
'%%%%'];

solve(79228162514264337593543950335, input); // 353 purchases. Money left: 576460752303416096.37 lv

