function scoreCalculator([arg1]) {
    let num = Number(arg1);
    let bonusScore = 0;

    if (num > 1000) {
        bonusScore = num * 0.10;
    }
    else if (num > 100) {
        bonusScore = num * 0.20;
    }
    else {
        bonusScore += 5;
    }

    if (num % 10 == 5) {
        bonusScore += 2;
    }
    else if (num % 2 == 0) {
        bonusScore++;
    }
    console.log("Bonus score: " + bonusScore);
    console.log("Total score: " + (num + bonusScore));
}

scoreCalculator([20]);
scoreCalculator([175]);
scoreCalculator([2703]);
scoreCalculator([15875]);

