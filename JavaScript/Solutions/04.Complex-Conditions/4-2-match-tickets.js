function matchTickets([arg1,arg2,arg3]){
	// Read input data
	let budget = Number(arg1);
	let ticketType = arg2;
	let people = Number(arg3);

	// Initialization of the required parameters
	let transportCharges = 0.00;
	let moneyForTickets = 0.00;
	let moneyDifference = 0.00;

	// Calculate transport charges
	if (people <= 4) {
		transportCharges = 0.75 * budget;
	} else if (people <= 9) {
		transportCharges = 0.60 * budget;
	} else if (people <= 24) {
		transportCharges = 0.50 * budget;
	} else if (people <= 49) {
		transportCharges = 0.40 * budget;
	} else if (people >= 50) {
		transportCharges = 0.25 * budget;
	}

	// Calculate money for tickets.
	switch (ticketType) {
		case "Normal":
			moneyForTickets = people * 249.99;
			break;
		case "VIP":
			moneyForTickets = people * 499.99;
			break;
		default:
			moneyForTickets = people * 249.99;
			break;
	}

	// Calculate amount of money left and result to display.
	moneyDifference = budget - transportCharges - moneyForTickets;
	let result = 
		"Yes! You have " + moneyDifference.toFixed(2) + " leva left.";

	if (moneyDifference < 0) {
		result = 
			"Not enough money! You need " + 
			Math.abs(moneyDifference).toFixed(2) + " leva.";
	}

	// Output the result
	console.log(result);
}

matchTickets(["1000","Normal", "1"]);
matchTickets(["30000","VIP", "49"]);
