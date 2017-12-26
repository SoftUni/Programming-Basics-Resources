function money([arg1,arg2,arg3]){
    let bitcoins = Number(arg1);
    let chYuana = Number(arg2);
    let commision = Number(arg3);

    let bitcoinsInLv = bitcoins * 1168;
    let yuanaInLv = chYuana * 0.15 * 1.76;
    let sumInLv = bitcoinsInLv + yuanaInLv;

    let sumInEur = sumInLv / 1.95;
    let sumInEurWithCommision = sumInEur * (1-commision / 100);
    console.log(sumInEurWithCommision);
}