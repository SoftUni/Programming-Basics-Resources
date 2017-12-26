function dailyProfit([arg1,arg2,arg3]){
    let workDays = Number(arg1);
    let moneyPerDay = Number(arg2);
    let lvPerDollar = Number(arg3);

    let monthlyPay = workDays * moneyPerDay;
    let yearlyPay = monthlyPay * 14.5;
    let payWithTaxes = yearlyPay * 0.75;
    let earningsPerDay = payWithTaxes / 365;

    console.log((earningsPerDay * lvPerDollar).toFixed(2));
}