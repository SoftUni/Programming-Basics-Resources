function celsiusToFahrenheit([arg1]) {
    let degreesC = Number(arg1);
    let degreesF = degreesC * 9 / 5 + 32;
    console.log(degreesF.toFixed(2)); 
}

celsiusToFahrenheit([25]);
celsiusToFahrenheit([0]);
celsiusToFahrenheit([-5.5]);
celsiusToFahrenheit([32.3]);
