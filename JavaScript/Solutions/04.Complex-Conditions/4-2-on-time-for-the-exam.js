function onTimeForTheExam([arg1, arg2, arg3, arg4]){
	// Set some constants.
	let late = "Late";
	let onTime = "On time";
	let early = "Early";
	
	// Read arguments.
	let examHours = Number(arg1);
	let examMinutes = Number(arg2);
	let arrivalHours = Number(arg3);
	let arrivalMinutes = Number(arg4);
	
	// Calculate all differences in minutes.
	let examTime = (examHours * 60) + examMinutes;
	//console.log("examTime:" + examTime);
	let arrivalTime = (arrivalHours * 60) + arrivalMinutes;
	//console.log("arrivalTime:" + arrivalTime);
	let totalMinutesDifference = arrivalTime - examTime;
	//console.log("totalMinutesDifference:" + totalMinutesDifference);

	// Check when the student had arrived for the exam and display the result
	let studentArrival = late;
	if (totalMinutesDifference < -30) {
		studentArrival = early;
	} else if (totalMinutesDifference <= 0)	{
		studentArrival = onTime;
	}
	
	//console.log("studentArrival:" + studentArrival);
	
	// Check and output final result.
	let result = "";
	if (totalMinutesDifference != 0) {
		let hoursDifference = Math.abs(~~(totalMinutesDifference / 60));
		//console.log("hoursDifference:" + hoursDifference);
		let minutesDifference = Math.abs(totalMinutesDifference % 60);
		//console.log("minutesDifference:" + minutesDifference);

		if (hoursDifference > 0) {
			result = hoursDifference + ":" + (minutesDifference > 9 ? minutesDifference : "0" + minutesDifference) + " hours";
		} else {
			result = minutesDifference + " minutes";
		}
		
		//console.log("result:" + result);

		if (totalMinutesDifference < 0)	{
			result += " before the start";
		} else {
			result += " after the start";
		}
	}
	
	// Output the result
	console.log(studentArrival);
	if (result)	{
		console.log(result);
	}
}


//onTimeForTheExam(["9","30","9","50"]);
//onTimeForTheExam(["9","00","8","30"]);
//onTimeForTheExam(["16","00","15","00"]);
//onTimeForTheExam(["9","00","10","30"]);
//onTimeForTheExam(["14","00","13","55"]);
//onTimeForTheExam(["11","30","8","12"]);
//onTimeForTheExam(["10","00","10","00"]);
//onTimeForTheExam(["11","30","10","55"]);
//onTimeForTheExam(["11","30","12","29"]);