function dayOfWeek([arg1]){
    let day = parseInt(arg1);
    switch (day)
    {
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        case 7: console.log("Sunday"); break;
        default: console.log("Error!"); break;
    }
}

dayOfWeek([1]);
dayOfWeek([2]);
dayOfWeek([3]);
dayOfWeek([4]);
dayOfWeek([5]);
dayOfWeek([6]);
dayOfWeek([7]);
dayOfWeek([-1]);