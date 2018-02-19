function hotelRoom([arg1,arg2]){
	// Read input data
	let month = arg1;
	let nights = Number(arg2);

	// Initialization of the required parameters
	let studioPrice = 50.00;
	let apartmentPrice = 65.00;
	let studioRent = 0.00;
	let apartmentRent = 0.00;

	// Calculate studio and apartment rent prices.
	switch (month) {
		case "May":
		case "October":
			studioPrice = 50.00;
			apartmentPrice = 65.00;

			studioRent = studioPrice * nights;
			apartmentRent = apartmentPrice * nights;

			if (nights > 14) {
				studioRent *= 0.70;
				apartmentRent *= 0.90;
			} else if (nights > 7) {
				studioRent *= 0.95;
			}

			break;
		case "June":
		case "September":
			studioPrice = 75.20;
			apartmentPrice = 68.70;

			studioRent = studioPrice * nights;
			apartmentRent = apartmentPrice * nights;

			if (nights > 14) {
				studioRent *= 0.80;
				apartmentRent *= 0.90;
			}

			break;
		case "July":
		case "August":
			studioPrice = 76.00;
			apartmentPrice = 77.00;

			studioRent = studioPrice * nights;
			apartmentRent = apartmentPrice * nights;

			if (nights > 14) {
				apartmentRent *= 0.90;
			}

			break;
		default:
			break;
	}

	let studioInfo = "Studio: " + 
					studioRent.toFixed(2) + " lv.";
	let apartmentInfo = "Apartment: " + 
					apartmentRent.toFixed(2) + " lv.";

	// Output the result
	console.log(apartmentInfo);
	console.log(studioInfo);
}

hotelRoom(["May","15"]);
hotelRoom(["June","14"]);
hotelRoom(["August","20"]);