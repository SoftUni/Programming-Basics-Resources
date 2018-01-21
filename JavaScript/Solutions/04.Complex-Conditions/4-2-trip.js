function trip([arg1, arg2]){
	// Read input data
	let budget = Number(arg1);
	let season = arg2.toLowerCase();
	
	// Initialization of the required parameters
	let destinationResult = "";
	let holidayInformation = "";
	let moneySpent = 0.00;
	
	// Calculate result
	if (budget <= 100.00) {
		destinationResult = "Bulgaria";
		if (season === "summer") {
			moneySpent = 0.30 * budget;
			holidayInformation = "Camp - " + moneySpent.toFixed(2);
		} else {
			moneySpent = 0.70 * budget;
			holidayInformation = "Hotel - " + moneySpent.toFixed(2);
		}
	} else if (budget <= 1000.00) {
		destinationResult = "Balkans";
		if (season === "summer") {
			moneySpent = 0.40 * budget;
			holidayInformation = "Camp - " +  moneySpent.toFixed(2);
		} else {
			moneySpent = 0.80 * budget;
			holidayInformation = "Hotel - " + moneySpent.toFixed(2);
		}
	} else {
		destinationResult = "Europe";
		moneySpent = 0.90 * budget;
		holidayInformation = "Hotel - " +  moneySpent.toFixed(2);
	}
	
	// Output the result
	console.log("Somewhere in " + destinationResult);
	console.log(holidayInformation);
}

//trip(["50","summer"]);
//trip(["75","winter"]);
//trip(["312","summer"]);
//trip(["678.53","winter"]);
//trip(["1500","summer"]);